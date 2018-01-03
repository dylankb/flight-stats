import React, { Component } from 'react';

import './App.css';
import flightData from './data.js';
import Table from './components/Table.js';
import Select from './components/Select.js';

const { routes, airlines, airports, getAirlineById, getAirportByCode } = flightData;

class App extends Component {
  render() {
    function formatValue(property, value) {
      let result;
      if (property === 'airline') {
        result = getAirlineById(value);
      } else if (property === 'src' || property === 'dest') {
        result = getAirportByCode(value);
      }

      return result;
  constructor() {
    super()

    this.state = {
      selectedAirline: 'all',
    };

    this.handleAirlineSelection = this.handleAirlineSelection.bind(this);
  }
  handleAirlineSelection(airlineId) {
    this.setState((previousState) => {
      return {
        selectedAirline: airlineId
      };
    });
  }

    }
  render() {
    const { selectedAirline } = this.state;
    const defaultOption = { id: 'all', name: 'All Airlines' };
    const filteredAirlines = airlines.concat(defaultOption);
    const filteredRoutesByAirline = routes.filter((row) => {
      if (selectedAirline === 'all') { return true; }
      return String(row.airline) === selectedAirline;
    });

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
          <Select
            options={filteredAirlines}
            valueKey="id"
            titleKey="name"
            allTitle="All Airlines"
            value={this.state.selectedAirline}
            onSelect={this.handleAirlineSelection}
          />
          <Table
            className="routes-table"
            columns={columns}
            rows={filteredRoutesByAirline}
            format={this.formatValue}
            perPage={25}
          />
        </section>
      </div>
    );
  }
}

export default App;
