import React, { Component } from 'react';
import Filter from './Filter';
import TaskList from './TaskList';
import MissionList from './MissionList';
import ProjectList from './ProjectList';
import './Dashboard.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Filter />
        <div className="dashboard-lists">
          <TaskList />
          <MissionList />
          <ProjectList />
        </div>
      </div>
    );
  }
}
