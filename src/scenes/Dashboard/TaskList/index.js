import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../Task';
import TaskNew from '../TaskNew';
import { editTask } from '../actions/taskActions';
import { getVisibleTasks } from '../selectors';
import './TaskList.css';

export class TaskList extends Component {
  saveChanges = (changes, taskId) => {
    this.props.dispatch(
      editTask({
        ...this.props.tasks.find(task => task.id === taskId),
        ...changes
      })
    );
  };

  render() {
    return (
      <div className="task-list">
        <TaskNew parentId={this.props.parentId} />
        {this.props.tasks.map(task => (
          <Task
            title={task.title}
            description={task.description}
            isDue={task.isDue}
            saveChanges={this.saveChanges}
            id={task.id}
            key={task.id}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ tasks, filter }, props) => {
  return { tasks: getVisibleTasks(tasks, filter) };
};

export default connect(mapStateToProps)(TaskList);
