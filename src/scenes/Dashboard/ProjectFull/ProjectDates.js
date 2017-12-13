import React, { Component } from 'react';
import DatePicker from '../DatePicker';
import format from 'date-fns/format';
import distanceInWords from 'date-fns/distance_in_words';

export default class ProjectDates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.startDate,
      endDate: this.props.endDate,
      showStartPicker: false,
      showEndPicker: false
    };
  }

  toggleStartPicker = () => {
    this.setState(state => ({ showStartPicker: !state.showStartPicker }));
  };

  toggleEndPicker = () => {
    this.setState(state => ({ showEndPicker: !state.showEndPicker }));
  };

  selectStartDate = date => {
    this.setState({ startDate: date });
  };

  selectEndDate = date => {
    this.setState({ endDate: date });
  };

  saveDates = () => {
    this.props.saveChanges({
      startDate: this.state.startDate,
      endDate: this.state.endDate
    });
    this.setState({ showStartPicker: false, showEndPicker: false });
  };

  render() {
    return (
      <div className="detail-container">
        <div className="detail-title">Timeline</div>
        <div className="timeline-text-only">
          <li
            onClick={() => {
              this.toggleStartPicker();
            }}
          >
            Beginning: {format(this.props.startDate, 'Do MMM YYYY')}
          </li>
          {this.state.showStartPicker && (
            <DatePicker
              date={this.state.startDate}
              selectDate={this.selectStartDate}
              save={this.saveDates}
            />
          )}
          <li
            onClick={() => {
              this.toggleEndPicker();
            }}
          >
            Due: {format(this.props.endDate, 'Do MMM YYYY')}
          </li>
          {this.state.showEndPicker && (
            <DatePicker
              date={this.state.endDate}
              selectDate={this.selectEndDate}
              save={this.saveDates}
            />
          )}
          <li>
            Duration:{' '}
            {distanceInWords(this.props.startDate, this.props.endDate)}
          </li>
          <li>
            Time Remaining: {distanceInWords(new Date(), this.props.endDate)}
          </li>
        </div>
      </div>
    );
  }
}
