import React, { Component } from 'react';
import './App.css';
import flightData from './data.js';
import Table from './components/Table.js';

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
          <Table flightData={flightData} />
        </section>
      </div>
    );
  }
}

export default App;
