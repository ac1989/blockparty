import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProject } from '../actions/projectActions';

export class ProjectNew extends Component {
  addProject = () => {
    this.props.dispatch(addProject());
  };
  render() {
    return <div onClick={this.addProject}>New Project</div>;
  }
}

export default connect()(ProjectNew);
