import React, { Component } from 'react';
import { connect } from 'react-redux';
import MissionItem from '../MissionItem/';

export class MissionList extends Component {
  render() {
    return (
      <div className="mission-list">
        {this.props.missions.map(mission => (
          <MissionItem
            title={mission.title}
            description={mission.description}
            children={mission.children}
            key={mission.id}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ missions }) => {
  return { missions };
};

export default connect(mapStateToProps)(MissionList);
