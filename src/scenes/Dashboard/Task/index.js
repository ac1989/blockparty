import React, { Component } from 'react';
import './Task.css';

export default class Task extends Component {
  render() {
    return (
      <div className="panel task">
        <div
          className={
            this.props.isDue ? 'panel-title panel-title-due' : 'panel-title'
          }
        >
          <h3>{this.props.title}</h3>
        </div>
        <div className="task-content">
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
