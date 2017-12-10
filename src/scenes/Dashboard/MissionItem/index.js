import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Mission.css';

export class MissionItem extends Component {
  render() {
    return (
      <div className="panel mission">
        <div className="panel-title">
          <h3>{this.props.title}</h3>
        </div>
        <div className="mission-content">
          <p>{this.props.description}</p>
          <div className="child-list">
            {this.props.children.map(childId => {
              let task = this.props.tasks.find(task => {
                return task.id === childId;
              });
              return (
                <li
                  className={
                    task.isDue ? 'child-item child-item-due' : 'child-item'
                  }
                  key={task.title}
                >
                  > {task.title}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ tasks }) => {
  return { tasks };
};

export default connect(mapStateToProps)(MissionItem);
