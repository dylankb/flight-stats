import React, { Component } from 'react';

import './App.css';
import flightData from './data.js';
import Table from './components/Table.js';

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
    }
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
          <Table
            className="routes-table"
            columns={columns}
            rows={routes}
            format={formatValue}
            perPage={25}
            airlines={airlines}
          />
        </section>
      </div>
    );
  }
}

export default App;
