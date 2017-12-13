import React, { Component } from 'react';

export default class ProjectLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: this.props.links,
      editLink: null
    };
  }

  setEditLink = index => {
    this.setState({ editLink: index });
  };

  handleFocus = e => {
    e.target.select();
  };

  handleChange = (e, index) => {
    const value = e.target.value;
    this.setState(state => {
      return {
        links: [
          ...state.links.slice(0, state.editLink),
          value,
          ...state.links.slice(state.editLink + 1)
        ]
      };
    });
  };

  handleKeyPress = e => {
    const code = e.keyCode || e.charCode;
    if (code == 13) {
      this.props.saveChanges({ links: this.state.links });
      this.setState({ editLink: null });
    }
  };

  render() {
    return (
      <div className="detail-container">
        <div className="detail-title">Other Links</div>
        <div className="link-list">
          {this.state.links.map((link, index) => {
            if (this.state.editLink === index) {
              return (
                <li key={`link${index}`}>
                  <input
                    type="text"
                    value={this.state.links[index]}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    autoFocus
                    onFocus={this.handleFocus}
                  />
                </li>
              );
            } else {
              return (
                <li key={`link${index}`}>
                  <a href="#">{link}</a>
                  <i
                    className="fa fa-pencil"
                    onClick={() => {
                      this.setEditLink(index);
                    }}
                  />
                </li>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
