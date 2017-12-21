import React, { Component } from 'react';

export default class FullLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: '',
      isEditable: false
    };
  }

  toggleEditable = () => {
    this.setState({ link: this.props.link, isEditable: true });
  };

  handleFocus = e => {
    e.target.select();
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({ link: value });
  };

  handleKeyPress = e => {
    const code = e.keyCode || e.charCode;
    if (code === 13) {
      this.handleSave();
    }
  };

  handleSave = () => {
    this.props.saveLink(this.state.link, this.props.index);
    this.setState({ isEditable: false });
  };

  render() {
    if (this.state.isEditable) {
      return (
        <li>
          <input
            type="text"
            value={this.state.link}
            autoFocus
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            className="link-input"
          />
          <span className="centered-icon-28" onClick={this.handleSave}>
            <i className="fa fa-save" />
          </span>
        </li>
      );
    } else {
      return (
        <li>
          <a href="#">{this.props.link}</a>
          <span className="centered-icon-28" onClick={this.toggleEditable}>
            <i className="fa fa-pencil" />
          </span>
        </li>
      );
    }
  }
}
