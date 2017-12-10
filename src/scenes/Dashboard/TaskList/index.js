import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../Task';
import './TaskList.css';

export class TaskList extends Component {
  render() {
    return (
      <div className="task-list">
        {this.props.tasks.map(task => (
          <Task
            title={task.title}
            description={task.description}
            isDue={task.isDue}
            key={task.id}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ tasks }) => {
  return { tasks };
};

export default connect(mapStateToProps)(TaskList);
