import React, { Component } from 'react';

export default class ProjectRepo extends Component {
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
    if (code == 13) {
      this.props.saveChanges({ repo: this.state.repo });
      this.toggleEditMode();
    }
  };

  render() {
    if (this.state.editMode) {
      return (
        <div className="detail-container">
          <div className="detail-title">Project Repo</div>
          <div className="link-list">
            <li>
              <input
                type="text"
                value={this.state.repo}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                autoFocus
                onFocus={this.handleFocus}
              />
            </li>
          </div>
        </div>
      );
    } else {
      return (
        <div className="detail-container">
          <div className="detail-title">Project Repo</div>
          <div className="link-list">
            <li>
              <a href="#">{this.props.repo}</a>
            </li>
            <i className="fa fa-pencil" onClick={this.toggleEditMode} />
          </div>
        </div>
      );
    }
  }
}
