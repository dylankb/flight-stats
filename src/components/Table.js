import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props)
    
    const defaultPage = 1;
    this.state = { currentPage: defaultPage };

    this.handleNextPageClick = this.handleNextPageClick.bind(this);
  }
  handleNextPageClick() {
    this.setState((previousState) => {
      return {
        currentPage: previousState.currentPage + 1
      };
    });
  }
  render() {
    const { columns, rows, format, perPage } = this.props;
    const { currentPage } = this.state;
    const currentRows = rows.slice(currentPage * perPage - 24, currentPage * perPage)
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
      <table>
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
        <tfoot>
          <tr>
            <td onClick={this.handleNextPageClick}>Next</td>
            <td>Previous</td>
          </tr>
          <tr>
            <td>Displaying {currentPage * perPage - 24} - {currentPage * perPage} results</td>
          </tr>
        </tfoot>
      </table>
    );

  }
}

export default Table;
