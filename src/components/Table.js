import React, { Component } from 'react';

class Table extends Component {
  render() {
    const { routes, airlines, airports, getAirlineById, getAirportByCode } = this.props.flightData;
    return (
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
    );

  }
}

export default Table;
