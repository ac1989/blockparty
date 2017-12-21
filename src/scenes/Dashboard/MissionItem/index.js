import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSubTasks, getSubMissions } from '../selectors';
import './Mission.css';

export class MissionItem extends Component {
  render() {
    return (
      <div className="panel mission">
        <div className="panel-title">
          <Link to={`/mission/${this.props.id}`}>
            <h3>{this.props.title}</h3>
          </Link>
        </div>
        <div className="mission-content">
          <p>{this.props.description}</p>
          <div className="child-list">
            {this.props.tasks.map(task => {
              return (
                <li
                  className={
                    task.isDue ? 'child-item child-item-due' : 'child-item'
                  }
                  key={task.title}
                >
                  > {task.title}
                </li>
              );
            })}
            {this.props.missions.map(mission => {
              return (
                <Link to={`/mission/${mission.id}`} key={mission.title}>
                  <li
                    className={
                      mission.isDue ? 'child-item child-item-due' : 'child-item'
                    }
                  >
                    {mission.title}
                  </li>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ tasks, missions }, props) => {
  return {
    tasks: getSubTasks(tasks, props.id),
    missions: getSubMissions(missions, props.id)
  };
};

export default connect(mapStateToProps)(MissionItem);
