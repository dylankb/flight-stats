import React, { Component } from 'react';

import './App.css';
import flightData from './data.js';
import Table from './components/Table.js';
import Select from './components/Select.js';

const { routes, airlines, airports, getAirlineById, getAirportByCode } = flightData;

class App extends Component {
  constructor() {
    super()

    this.state = {
      selectedAirline: 'all',
      selectedAirport: 'all',
    };

    this.handleAirlineSelection = this.handleAirlineSelection.bind(this);
    this.handleAirportSelection = this.handleAirportSelection.bind(this);
  }
  handleAirlineSelection(airlineId) {
    this.setState({
      selectedAirline: airlineId,
    });
  }
  handleAirportSelection(airportId) {
    this.setState({
      selectedAirport: airportId
    });
  }

  formatValue(property, value) {
    let result;
    if (property === 'airline') {
      result = getAirlineById(value);
    } else if (property === 'src' || property === 'dest') {
      result = getAirportByCode(value);
    }

    return result;
  }
  render() {
    const { selectedAirline, selectedAirport } = this.state;
    const filteredAirlines = airlines;
    const filteredAirports = airports.sort((a, b) => {
      if (a.name > b.name) { return 1; }
      if (a.name < b.name) { return -1; }
      return 0;
    });

    const filteredRoutesByAirline = () => {
      if (selectedAirline === 'all') { return routes; }
      return routes.filter(row => String(row.airline) === selectedAirline);
    };

    const filteredRoutesByAirlineAndAirport = () => {
      if (selectedAirport === 'all') {
        return filteredRoutesByAirline();
      } else {
        return filteredRoutesByAirline().filter((row) => {
          return row.src === selectedAirport || row.src === selectedAirport;
        });
      }
    };

    const columns = [
      {name: 'Airline', property: 'airline'},
      {name: 'Source Airport', property: 'src'},
      {name: 'Destination Airport', property: 'dest'},
    ];

    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>
        <section>
          <p>
            Welcome to the app!
          </p>
          <span>Show routes on...</span>
          <Select
            options={filteredAirlines}
            valueKey="id"
            titleKey="name"
            allTitle="All Airlines"
            value={this.state.selectedAirline}
            onSelect={this.handleAirlineSelection}
          />
          <span>for flights in and out of</span>
          <Select
            options={filteredAirports}
            valueKey="code"
            titleKey="name"
            allTitle="All Airports"
            value={this.state.selectedAirport}
            onSelect={this.handleAirportSelection}
          />
          <Table
            className="routes-table"
            columns={columns}
            rows={filteredRoutesByAirlineAndAirport()}
            format={this.formatValue}
            perPage={25}
          />
        </section>
      </div>
    );
  }
}

export default App;
