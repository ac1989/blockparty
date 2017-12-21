import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilterBy, setFilterText } from '../actions/filterActions';
import './Filter.css';

export class Filter extends Component {
  state = {
    filterText: 'weather'
  };

  componentDidMount() {
    this.props.dispatch(setFilterBy('text'));
  }

  handleChange = e => {
    const value = e.target.value;
    this.setState({ filterText: value });
    this.props.dispatch(setFilterText(value));
  };

  render() {
    return (
      <div className="filter">
        <input
          type="text"
          value={this.state.filterText}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect()(Filter);
