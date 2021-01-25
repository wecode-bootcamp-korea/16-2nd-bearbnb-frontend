import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './CheckInOutDate.scss';

class CheckInOutDate extends Component {
  render() {
    const {
      startDate,
      endDate,
      onDatesChange,
      focusedInput,
      onFocusChange,
    } = this.props;

    return (
      <div className="CheckInOutDate">
        <DateRangePicker
          startDate={startDate}
          startDateId="selectedStartDate"
          endDate={endDate}
          endDateId="selectedEndDate"
          onDatesChange={onDatesChange}
          focusedInput={focusedInput}
          onFocusChange={onFocusChange}
          startDatePlaceholderText="날짜추가"
          endDatePlaceholderText="날짜추가"
        />
      </div>
    );
  }
}

export default CheckInOutDate;
