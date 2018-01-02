import React, { Component } from 'react';
import './App.css';
import flightData from './data.js';
const { routes, airlines, airports, getAirlineById, getAirportByCode } = flightData;

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>
        <section>
          <p>
            Welcome to the app!
          </p>
          <table>
            <thead>
              <tr>
                <th>Airline</th>
                <th>Source</th>
                <th>Destination</th>
              </tr>
            </thead>
            <tbody>
            {
              routes.map((route, index) => {
                return (
                  <tr key={index}>
                    <td>{getAirlineById(route.airline)}</td>
                    <td>{getAirportByCode(route.src)}</td>
                    <td>{getAirportByCode(route.dest)}</td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default App;
