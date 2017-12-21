import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Project.css';

export class ProjectItem extends Component {
  render() {
    return (
      <div className="panel project">
        <div className="panel-title">
          <Link to={`/project/${this.props.id}`}>
            <h3>{this.props.title}</h3>
          </Link>
        </div>
        <div className="project-content">
          <p>{this.props.description}</p>
          <img src={this.props.images[380]} alt="" />
          <div className="child-list">
            {this.props.children.map(childId => {
              let mission = this.props.missions.find(mission => {
                return mission.id === childId;
              });
              return (
                <li className="child-item" key={mission.title}>
                  > {mission.title}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ missions }) => {
  return { missions };
};

export default connect(mapStateToProps)(ProjectItem);
