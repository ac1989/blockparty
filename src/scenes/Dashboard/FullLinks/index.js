import React, { Component } from 'react';
import FullLink from './FullLink';
import AddLink from './AddLink';

export default class FullLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: this.props.links
    };
  }

  saveLink = (link, index) => {
    this.props.saveChanges({
      links: [
        ...this.props.links.slice(0, index),
        link,
        ...this.props.links.slice(index + 1)
      ]
    });
  };

  addLink = link => {
    this.props.saveChanges({
      links: [...this.props.links, link]
    });
  };

  render() {
    return (
      <div className="detail-container">
        <div className="detail-title-row">
          <div className="detail-title">Other Links</div>
        </div>
        <div className="link-list">
          {this.props.links.map((link, index) => {
            return (
              <FullLink
                key={link + index}
                link={link}
                index={index}
                saveLink={this.saveLink}
              />
            );
          })}
        </div>
        <AddLink addLink={this.addLink} />
      </div>
    );
  }
}
