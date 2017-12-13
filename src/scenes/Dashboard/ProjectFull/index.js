import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectTitle from './ProjectTitle';
import ProjectDescription from './ProjectDescription';
import ProjectDates from './ProjectDates';
import ProjectRepo from './ProjectRepo';
import ProjectLinks from './ProjectLinks';
import MissionList from '../MissionList';
import DatePicker from '../DatePicker';
import { editProject } from '../actions/projectActions';
import './ProjectFull.css';

export class ProjectFull extends Component {
  state = {
    showStartPicker: false,
    showEndPicker: false
  };

  toggleStartPicker = () => {
    this.setState(state => ({ showStartPicker: !state.showStartPicker }));
  };

  toggleEndPicker = () => {
    this.setState(state => ({ showEndPicker: !state.showEndPicker }));
  };

  saveChanges = changes => {
    console.log(this.props.project);
    console.log(changes);
    this.props.dispatch(editProject({ ...this.props.project, ...changes }));
  };

  render() {
    const project = this.props.project;

    return (
      <div className="project-full">
        <div className="project-full-details">
          <ProjectTitle
            title={project.title}
            id={project.id}
            saveChanges={this.saveChanges}
          />
          <ProjectDescription
            description={project.description}
            saveChanges={this.saveChanges}
          />
          <ProjectDates
            startDate={project.startDate}
            endDate={project.endDate}
            saveChanges={this.saveChanges}
          />
          <ProjectRepo repo={project.repo} saveChanges={this.saveChanges} />
          <ProjectLinks links={project.links} saveChanges={this.saveChanges} />
        </div>
        <MissionList />
      </div>
    );
  }
}

const mapStateToProps = ({ projects }, props) => {
  return {
    project: projects.find(project => {
      return project.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(ProjectFull);
