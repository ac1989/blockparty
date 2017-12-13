import React, { Component } from 'react';

export default class ProjectTitle extends Component {
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
    if (code == 13) {
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
        <div className="project-full-title">
          <h2>
            Project |
            <input
              type="text"
              autoFocus
              onFocus={this.handleFocus}
              value={this.state.title}
              onChange={this.handleInput}
              onKeyPress={this.handleKeyPress}
            />{' '}
            | {this.state.id}
          </h2>
          <i
            className="fa fa-save"
            onClick={() => {
              this.props.saveChanges({ title: this.state.title });
              this.toggleEditMode();
            }}
          />
        </div>
      );
    } else {
      return (
        <div className="project-full-title">
          <h2 onDoubleClick={this.toggleEditMode}>
            Project | {this.state.title} | {this.state.id}
          </h2>
          <i className="fa fa-pencil" onClick={this.toggleEditMode} />
        </div>
      );
    }
  }
}
