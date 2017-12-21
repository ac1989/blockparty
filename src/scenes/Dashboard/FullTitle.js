import React, { Component } from 'react';

export default class FullTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      id: this.props.id,
      editMode: false
    };
  }

  toggleEditMode = () => {
    this.setState(state => {
      return { editMode: !state.editMode };
    });
  };

  handleInput = e => {
    this.setState({ title: e.target.value });
  };

  handleKeyPress = e => {
    const code = e.keyCode || e.charCode;
    if (code === 13) {
      this.props.saveChanges({ title: this.state.title });
      this.toggleEditMode();
    }
  };

  handleFocus = e => {
    e.target.select();
  };

  render() {
    if (this.state.editMode) {
      return (
        <div className="full-title">
          <h2>
            {this.props.type} |{' '}
            <input
              type="text"
              class="title-input"
              autoFocus
              onFocus={this.handleFocus}
              value={this.state.title}
              onChange={this.handleInput}
              onKeyPress={this.handleKeyPress}
            />
          </h2>
          <i
            className="fa fa-save fa-lg"
            onClick={() => {
              this.props.saveChanges({ title: this.state.title });
              this.toggleEditMode();
            }}
          />
        </div>
      );
    } else {
      return (
        <div className="full-title">
          <h2 onDoubleClick={this.toggleEditMode}>
            {this.props.type} | {this.state.title}
          </h2>
          <i className="fa fa-pencil fa-lg" onClick={this.toggleEditMode} />
        </div>
      );
    }
  }
}
