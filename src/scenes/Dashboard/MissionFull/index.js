import React, { Component } from 'react';
import { connect } from 'react-redux';
import FullTitle from '../FullTitle';
import FullDescription from '../FullDescription';
import FullDates from '../FullDates';
import FullRepo from '../FullRepo';
import FullLinks from '../FullLinks';
import MissionList from '../MissionList';
import TaskList from '../TaskList';
import { editMission } from '../actions/missionActions';
import { setFilterBy, setFilterId } from '../actions/filterActions';

export class MissionFull extends Component {
  saveChanges = changes => {
    this.props.dispatch(editMission({ ...this.props.mission, ...changes }));
  };

  componentDidMount() {
    this.props.dispatch(setFilterBy('parentId'));
    this.props.dispatch(setFilterId(this.props.match.params.id));
  }

  render() {
    const mission = this.props.mission;
    return (
      <div className="display-full">
        <div className="display-full-details">
          <FullTitle
            type={'Mission'}
            title={mission.title}
            saveChanges={this.saveChanges}
          />
          <FullDescription
            description={mission.description}
            saveChanges={this.saveChanges}
          />
          <FullDates
            startDate={mission.startDate}
            endDate={mission.endDate}
            saveChanges={this.saveChanges}
          />
          <FullRepo repo={mission.repo} saveChanges={this.saveChanges} />
          <FullLinks links={mission.links} saveChanges={this.saveChanges} />
        </div>
        <div className="display-full-subitems">
          <MissionList parentId={this.props.match.params.id} />
          <TaskList parentId={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ missions }, props) => {
  return {
    mission: missions.find(mission => {
      return mission.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(MissionFull);
