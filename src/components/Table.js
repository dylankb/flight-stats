import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props)

    const defaultPage = 1;
    this.state = {
      currentPage: defaultPage,
    };

    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.handlePrevPageClick = this.handlePrevPageClick.bind(this);
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
  render() {
    const { className, columns, rows, format, perPage } = this.props;
    const { currentPage } = this.state;

    const currentRows = rows.slice(currentPage * perPage - 25, currentPage * perPage);

    const formattedRows = currentRows.map((route, index) => {
      return (
        <tr key={index}>
          <td>{format(columns[0].property, route.airline)}</td>
          <td>{format(columns[1].property, route.src)}</td>
          <td>{format(columns[2].property, route.dest)}</td>
        </tr>
      );
    });

    const flightDataHeaders = columns.map((column, index) => {
      return (<th key={index}>{column.name}</th>);
    });

    return (
      <div>
        <table className={className}>
          <thead>
            <tr>
              {flightDataHeaders}
            </tr>
          </thead>
          <tbody>
            {formattedRows}
          </tbody>
        </table>
        <p>Displaying {currentPage * perPage - 24} - {currentPage * currentRows.length} result{rows.length === 1 ? "" : "s"}</p>
        <div>
          <button
            disabled={currentPage === 1 ? true : false}
            onClick={this.handlePrevPageClick}
          >Previous</button>
          <button
            disabled={this.props.rows.length - ((currentPage + 1) * perPage) >= 0 ? false : true}
            onClick={this.handleNextPageClick}
          >Next
          </button>
        </div>
      </div>
    );

  }
}

export default Table;
