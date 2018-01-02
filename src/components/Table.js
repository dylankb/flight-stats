import React, { Component } from 'react';

class Table extends Component {
  render() {
    const { columns, format} = this.props;
    const formattedRows = this.props.rows.map((route, index) => {
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
      </table>
    );

  }
}

export default Table;
