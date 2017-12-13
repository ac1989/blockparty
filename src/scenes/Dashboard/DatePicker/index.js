import React, { Component } from 'react';
import getDaysInMonth from 'date-fns/get_days_in_month';
import getDay from 'date-fns/get_day';
import getDate from 'date-fns/get_date';
import getMonth from 'date-fns/get_month';
import format from 'date-fns/format';
import eachDay from 'date-fns/each_day';
import startOfMonth from 'date-fns/start_of_month';
import endOfMonth from 'date-fns/end_of_month';
import subDays from 'date-fns/sub_days';
import addDays from 'date-fns/add_days';
import subMonths from 'date-fns/sub_months';
import addMonths from 'date-fns/add_months';
import isEqual from 'date-fns/is_equal';
import isSameMonth from 'date-fns/is_same_month';
import './DatePicker.css';

const CalendarWeek = () => {
  const weekTitles = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  return (
    <div className="week-title-row">
      {weekTitles.map(day => (
        <div key={day} className="week-title-day">
          {day}
        </div>
      ))}
    </div>
  );
};

const CalendarDay = ({ date, selectedDate, displayMonth, onClick }) => {
  const dateNo = getDate(date);
  const renderDate = () => {
    let className = 'calendar-day';
    if (isEqual(date, selectedDate)) {
      className += ' selected-day';
    }
    if (!isSameMonth(date, displayMonth)) {
      className += ' month-overflow';
    }
    return (
      <div className={className} onClick={onClick}>
        {dateNo}
      </div>
    );
  };

  return renderDate();
};

export default class DatePicker extends Component {
  constructor(props) {
    console.log('const');
    super(props);
    this.state = {
      displayMonth: this.props.date
    };
  }

  previousMonth = () => {
    this.setState(state => {
      return { displayMonth: subMonths(state.displayMonth, 1) };
    });
  };

  nextMonth = () => {
    this.setState(state => {
      return { displayMonth: addMonths(this.state.displayMonth, 1) };
    });
  };

  selectDate = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const selectedDate = this.props.date;
    const displayMonth = this.state.displayMonth;

    const firstDateOfMonth = startOfMonth(displayMonth);
    const firstDateOfMonthDay = getDay(firstDateOfMonth);
    const displayFrom = subDays(firstDateOfMonth, firstDateOfMonthDay);

    const lastDateOfMonth = endOfMonth(displayMonth);
    const lastDateOfMonthDay = getDay(lastDateOfMonth);
    const displayTo = addDays(lastDateOfMonth, 6 - lastDateOfMonthDay);

    const displayDates = eachDay(displayFrom, displayTo);
    return (
      <div className="date-picker">
        <div className="month-title-row">
          <i
            className="fa fa-chevron-left calendar-month-control"
            onClick={() => {
              this.previousMonth();
            }}
          />
          <div>{format(this.state.displayMonth, 'MMMM YYYY')}</div>
          <i
            className="fa fa-chevron-right calendar-month-control"
            onClick={() => {
              this.nextMonth();
            }}
          />
        </div>

        <CalendarWeek />
        {displayDates.map(date => {
          return (
            <CalendarDay
              selectedDate={selectedDate}
              displayMonth={displayMonth}
              date={date}
              key={date}
              onClick={() => {
                this.props.selectDate(date);
              }}
            />
          );
        })}
        <div className="bottom-controls-row">
          <i
            className="fa fa-save save-control"
            onClick={() => {
              this.props.save(this.state.selectedDate);
            }}
          />
          <i className="fa fa-close close-control" />
        </div>
      </div>
    );
  }
}
