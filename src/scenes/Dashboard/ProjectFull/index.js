import React, { Component } from 'react';
import { connect } from 'react-redux';
import MissionList from '../MissionList';
import './ProjectFull.css';

export class ProjectFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: this.props.projects.find(project => {
        return project.id === this.props.match.params.id;
      })
    };
  }
  render() {
    const project = this.state.project;

    return (
      <div className="project-full">
        <div className="project-full-details">
          <div className="project-full-title">
            <h2>
              Project | {project.title} | {this.props.match.params.id}
            </h2>
          </div>
          <div className="detail-container">
            <div className="detail-title">Description</div>
            <p className="description-content">{project.description}</p>
          </div>
          <div className="detail-container">
            <div className="detail-title">Timeline</div>
            <div className="timeline-text-only">
              <li>Beginning</li>
              <li>Due</li>
              <li>Duration</li>
            </div>
          </div>
          <div className="detail-container">
            <div className="detail-title">Project Repo</div>
            <div className="link-list">
              <li>
                <a href="#">{project.repo}</a>
              </li>
            </div>
          </div>
          <div className="detail-container">
            <div className="detail-title">Other Links</div>
            <div className="link-list">
              {project.links.map((link, index) => {
                return (
                  <li key={`link${index}`}>
                    <a href="#">{link}</a>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
        <MissionList />
      </div>
    );
  }
}

const mapStateToProps = ({ projects }) => {
  return { projects };
};

export default connect(mapStateToProps)(ProjectFull);
