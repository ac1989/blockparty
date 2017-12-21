import React, { Component } from 'react';
import validate from 'validate.js';

export default class AddLink extends Component {
  state = {
    newLink: 'https://',
    linkValidation: undefined,
    saveFailed: false,
    showInput: false
  };

  runValidation = url => {
    return validate(
      {
        url
      },
      {
        url: {
          url: {
            message: 'must be a valid URL.'
          }
        }
      }
    );
  };

  toggleInput = () => {
    this.setState(state => ({ showInput: !state.showInput }));
  };

  handleFocus = e => {
    const value = e.target.value;
    e.target.value = '';
    e.target.value = value;
    this.setState({ linkValidation: this.runValidation(value) });
  };

  handleChange = e => {
    const value = e.target.value.toLowerCase();
    this.setState({
      newLink: value,
      linkValidation: this.runValidation(value)
    });
  };

  handleKeyPress = e => {
    const code = e.keyCode || e.charCode;
    if (code === 13) {
      this.addLink();
    }
  };

  addLink = () => {
    if (!this.state.linkValidation) {
      this.props.addLink(this.state.newLink);
      this.setState({
        newLink: 'https://',
        showInput: false,
        saveFailed: false
      });
    } else {
      this.setState({ saveFailed: true });
    }
  };

  render() {
    if (this.state.showInput) {
      return (
        <div>
          <div className="add-link">
            <input
              type="text"
              value={this.state.newLink}
              autoFocus
              onFocus={this.handleFocus}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
              className="link-input"
            />
            <span className="centered-icon-28" onClick={this.addLink}>
              <i className="fa fa-save" />
            </span>
          </div>
          {this.state.linkValidation &&
            this.state.saveFailed && (
              <div>
                <span className="validation-message">
                  {this.state.linkValidation.url}
                </span>
              </div>
            )}
        </div>
      );
    } else {
      return (
        <div className="add-link">
          <span className="centered-icon-28" onClick={this.toggleInput}>
            <i className="fa fa-plus" />
          </span>
        </div>
      );
    }
  }
}
