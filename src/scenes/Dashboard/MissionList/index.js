import React, { Component } from 'react';
import { connect } from 'react-redux';
import MissionItem from '../MissionItem/';
import MissionNew from '../MissionNew';
import { getVisibleMissions } from '../selectors';
import './MissionList.css';

export class MissionList extends Component {
  render() {
    return (
      <div className="mission-list">
        <MissionNew parentId={this.props.parentId} />
        {this.props.missions.map(mission => (
          <MissionItem
            title={mission.title}
            id={mission.id}
            description={mission.description}
            children={mission.children}
            key={mission.id}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ missions, filter }, props) => {
  return { missions: getVisibleMissions(missions, filter) };
};

export default connect(mapStateToProps)(MissionList);
