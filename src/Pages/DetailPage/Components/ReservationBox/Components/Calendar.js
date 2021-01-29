import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './Calendar.scss';

export const Calendar = props => {
  const {
    startDate,
    endDate,
    onDatesChange,
    focusedInput,
    onFocusChange,
  } = props;
  return (
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
      displayFormat="YYYY MMM D"
      noBorder
      small
    />
  );
};
