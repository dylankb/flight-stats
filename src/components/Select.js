import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props)

    this.handleSelection = this.handleSelection.bind(this);
  }
  handleSelection(event) {
    this.props.onSelect(event.target.value);
  }
  render() {
    const { valueKey, allTitle, titleKey, options } = this.props;
    const defaultOption = { [valueKey]: 'all', name: allTitle };

    const selectOptions = [defaultOption, ...options].map(option => {
      return (
        <option key={option[valueKey]} value={option[valueKey]}>
          {option[titleKey]}
        </option>
      );
    });

    return (
      <select
        value={this.props.value}
        onChange={this.handleSelection}
      >
        {selectOptions}
      </select>
    );
  }
}

export default Select;
