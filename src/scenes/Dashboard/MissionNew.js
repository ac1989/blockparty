import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMission } from './actions/missionActions';

export class MissionNew extends Component {
  addMission = () => {
    this.props.dispatch(addMission(this.props.parentId));
  };
  render() {
    return <div onClick={this.addMission}>New Mission</div>;
  }
}

export default connect()(MissionNew);
