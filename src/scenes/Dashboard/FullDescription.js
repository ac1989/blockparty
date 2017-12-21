import React, { Component } from 'react';

export default class FullDescription extends Component {
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
          <div className="detail-title-row">
            <div className="detail-title">Description</div>
            <span
              className="centered-icon-28"
              onClick={() => {
                this.props.saveChanges({
                  description: this.state.description
                });
                this.toggleEditMode();
              }}
            >
              <i className="fa fa-save" />
            </span>
          </div>
          <div className="description-content">
            {/* Wanna Make This Auto Size All Nice Like */}
            <textarea
              value={this.state.description}
              onChange={this.handleChange}
              autoFocus
              onFocus={this.handleFocus}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="detail-container">
          <div className="detail-title-row">
            <div className="detail-title">Description</div>
            <span className="centered-icon-28">
              <i className="fa fa-pencil" onClick={this.toggleEditMode} />
            </span>
          </div>
          <p onDoubleClick={this.toggleEditMode}>{this.props.description}</p>
        </div>
      );
    }
  }
}
