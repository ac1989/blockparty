import React, { Component } from 'react';

export default class ProjectDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.description,
      editMode: false
    };
  }

  toggleEditMode = () => {
    this.setState(state => {
      return { editMode: !state.editMode };
    });
  };

  handleChange = e => {
    this.setState({ description: e.target.value });
  };

  handleFocus = e => {
    e.target.select();
  };

  render() {
    if (this.state.editMode) {
      return (
        <div className="detail-container">
          <div className="detail-title">Description</div>
          <textarea
            value={this.state.description}
            onChange={this.handleChange}
            autoFocus
            onFocus={this.handleFocus}
          />
          <i
            className="fa fa-save"
            onClick={() => {
              this.props.saveChanges({ description: this.state.description });
              this.toggleEditMode();
            }}
          />
        </div>
      );
    } else {
      return (
        <div className="detail-container">
          <div className="detail-title">Description</div>
          <p
            className="description-content"
            onDoubleClick={this.toggleEditMode}
          >
            {this.props.description}
          </p>
        </div>
      );
    }
  }
}
