import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props)
    
    const defaultPage = 1;
    this.state = {
      currentPage: defaultPage,
      selectedAirline: 'all',
    };

    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.handlePrevPageClick = this.handlePrevPageClick.bind(this);
    this.handleAirlineSelection = this.handleAirlineSelection.bind(this);
  }
  handleNextPageClick() {
    this.setState((previousState) => {
      return {
        currentPage: previousState.currentPage + 1
      };
    });
  }
  handlePrevPageClick() {
    this.setState((previousState) => {
      return {
        currentPage: previousState.currentPage - 1
      };
    });
  }
  handleAirlineSelection(event) {
    var airlineId = event.target.value;
    this.setState((previousState) => {
      return {
        selectedAirline: airlineId
      };
    });
  }
  render() {
    const { airlines, className, columns, rows, format, perPage } = this.props;
    const { currentPage, selectedAirline } = this.state;
    const rowsByAirline = rows.filter((row) => {
      if (selectedAirline === 'all') { return true; }
      return String(row.airline) === selectedAirline;
    });
    const currentRows = rowsByAirline.slice(currentPage * perPage - 24, currentPage * perPage);
    const defaultOption = { id: 'all', name: 'All Airlines' };
    const airlineOptions = airlines.concat(defaultOption);
    const formattedRows = currentRows.map((route, index) => {
      return (
        <tr key={index}>
          <td>{format(columns[0].property, route.airline)}</td>
          <td>{format(columns[1].property, route.src)}</td>
          <td>{format(columns[2].property, route.dest)}</td>
        </tr>
      );
    });
    return (
      <div>
        <p>
          <span>Show routes on...</span>
          <select
            value={selectedAirline}
            onChange={this.handleAirlineSelection}
          >
            {
              airlineOptions.map((airline) => {
                return (
                  <option
                    key={airline.id}
                    value={airline.id}
                  >{airline.name}
                  </option>
                );
              })
            }
          </select>
        </p>
        <table className={className}>
          <thead>
            <tr>
              {
                columns.map((column, index) => {
                  return ( <th key={index}>{column.name}</th> );
                })
              }
            </tr>
          </thead>
          <tbody>
            {formattedRows}
          </tbody>
        </table>
        <p>Displaying {currentPage * perPage - 24} - {currentPage * perPage} results</p>
        <div>
          <button
            disabled={currentPage === 1 ? true : false}
            onClick={this.handlePrevPageClick}
          >Previous</button>
          <button
            onClick={this.handleNextPageClick}
          >Next
          </button>
        </div>
      </div>
    );

  }
}

export default Table;
