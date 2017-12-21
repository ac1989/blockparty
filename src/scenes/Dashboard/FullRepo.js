import React, { Component } from 'react';

export default class FullRepo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: this.props.repo,
      editMode: false
    };
  }

  toggleEditMode = () => {
    this.setState(state => {
      return { editMode: !state.editMode };
    });
  };

  handleFocus = e => {
    e.target.select();
  };

  handleChange = e => {
    this.setState({ repo: e.target.value });
  };

  handleKeyPress = e => {
    const code = e.keyCode || e.charCode;
    if (code === 13) {
      this.handleSave();
    }
  };

  handleSave = () => {
    this.props.saveChanges({ repo: this.state.repo });
    this.toggleEditMode();
  };

  handleDelete = () => {
    this.setState({ repo: null });
    this.props.saveChanges({ repo: null });
  };

  render() {
    if (this.state.editMode) {
      return (
        <div className="detail-container">
          <div className="detail-title-row">
            <div className="detail-title">Repository</div>
          </div>
          <div className="link-list">
            <li>
              <input
                type="text"
                value={this.state.repo}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                autoFocus
                onFocus={this.handleFocus}
                className="link-input"
              />
              <span className="centered-icon-28">
                <i className="fa fa-save" onClick={this.handleSave} />
              </span>
            </li>
          </div>
        </div>
      );
    } else {
      return (
        <div className="detail-container">
          <div className="detail-title-row">
            <div className="detail-title">Repository</div>
          </div>
          <div className="link-list">
            {this.state.repo ? (
              <li>
                <a href="#">{this.props.repo}</a>
                <span className="centered-icon-28" onClick={this.handleDelete}>
                  <i className="fa fa-trash" />
                </span>
                <span
                  className="centered-icon-28"
                  onClick={this.toggleEditMode}
                >
                  <i className="fa fa-pencil" />
                </span>
              </li>
            ) : (
              <li>
                <a onClick={this.toggleEditMode}>Click to add a repo</a>
                <span
                  className="centered-icon-28"
                  onClick={this.toggleEditMode}
                >
                  <i className="fa fa-plus" />
                </span>
              </li>
            )}
          </div>
        </div>
      );
    }
  }
}
