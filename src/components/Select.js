import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props)

    this.handleAirlineSelection = this.handleAirlineSelection.bind(this);
  }
  handleAirlineSelection(event) {
    this.props.onSelect(event.target.value);
  }
  render() {
    const { valueKey, allTitle, titleKey, options } = this.props;
    const defaultOption = { id: valueKey, name: allTitle };

    const airlineOptions = [defaultOption, ...options].map(airline => {
      return (
        <option key={airline.id} value={airline.id}>
          {airline[titleKey]}
        </option>
      );
    });

    return (
      <select
        value={this.props.value}
        onChange={this.handleAirlineSelection}
      >
        {airlineOptions}
      </select>
    );
  }
}

export default Select;
