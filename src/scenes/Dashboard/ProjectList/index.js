import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from '../ProjectItem';
import './ProjectList.css';

export class ProjectList extends Component {
  render() {
    return (
      <div className="project-list">
        {this.props.projects.map(project => {
          return (
            <ProjectItem
              title={project.title}
              description={project.description}
              images={project.images}
              children={project.children}
              id={project.id}
              key={project.id}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ projects }) => {
  return { projects };
};

export default connect(mapStateToProps)(ProjectList);
