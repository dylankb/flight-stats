import React, { Component } from 'react';
import './App.css';
import flightData from './data.js';
let { routes, airlines, airports } = flightData;

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
                    <td>{route.airline}</td>
                    <td>{route.src}</td>
                    <td>{route.dest}</td>
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
