import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from './actions/taskActions';

export class TaskNew extends Component {
  addTask = () => {
    this.props.dispatch(addTask(this.props.parentId));
  };
  render() {
    return <div onClick={this.addTask}>New Task</div>;
  }
}

export default connect()(TaskNew);
