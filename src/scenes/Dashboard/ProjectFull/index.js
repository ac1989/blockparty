import React, { Component } from 'react';
import { connect } from 'react-redux';
import FullTitle from '../FullTitle';
import FullDescription from '../FullDescription';
import FullDates from '../FullDates';
import FullRepo from '../FullRepo';
import FullLinks from '../FullLinks';
import MissionList from '../MissionList';
import { editProject } from '../actions/projectActions';
import { setFilterBy, setFilterId } from '../actions/filterActions';
import './ProjectFull.css';

export class ProjectFull extends Component {
  componentDidMount() {
    this.props.dispatch(setFilterBy('parentId'));
    this.props.dispatch(setFilterId(this.props.match.params.id));
  }

  saveChanges = changes => {
    this.props.dispatch(editProject({ ...this.props.project, ...changes }));
  };

  render() {
    const project = this.props.project;
    return (
      <div className="display-full">
        <div className="display-full-details">
          <FullTitle
            type={'Project'}
            title={project.title}
            id={project.id}
            saveChanges={this.saveChanges}
          />
          <FullDescription
            description={project.description}
            saveChanges={this.saveChanges}
          />
          <FullDates
            startDate={project.startDate}
            endDate={project.endDate}
            saveChanges={this.saveChanges}
          />
          <FullRepo repo={project.repo} saveChanges={this.saveChanges} />
          <FullLinks links={project.links} saveChanges={this.saveChanges} />
        </div>
        <MissionList parentId={this.props.match.params.id} />
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
