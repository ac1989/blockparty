import React, { Component } from 'react';
import DatePicker from './DatePicker';
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

  renderDatePicker = (date = new Date(), selectDate) => {
    return (
      <DatePicker date={date} selectDate={selectDate} save={this.saveDates} />
    );
  };

  render() {
    return (
      <div className="detail-container">
        <div className="detail-title-row">
          <div className="detail-title">Timeline</div>
        </div>
        <div className="timeline-text-only">
          <li
            onClick={() => {
              this.toggleStartPicker();
            }}
          >
            Beginning:{' '}
            {this.state.startDate ? (
              format(this.props.startDate, 'Do MMM YYYY')
            ) : (
              <span>No Date Found</span>
            )}
          </li>
          {this.state.showStartPicker &&
            this.renderDatePicker(this.state.startDate, this.selectStartDate)}
          <li
            onClick={() => {
              this.toggleEndPicker();
            }}
          >
            Due:{' '}
            {this.state.endDate ? (
              format(this.props.endDate, 'Do MMM YYYY')
            ) : (
              <span>No Date Found</span>
            )}
          </li>
          {this.state.showEndPicker &&
            this.renderDatePicker(this.state.endDate, this.selectEndDate)}
          {this.state.startDate &&
            this.state.endDate && (
              <li>
                Duration:{' '}
                {distanceInWords(this.props.startDate, this.props.endDate)}
              </li>
            )}
          {this.state.endDate && (
            <li>
              Time Remaining: {distanceInWords(new Date(), this.props.endDate)}
            </li>
          )}
        </div>
      </div>
    );
  }
}
