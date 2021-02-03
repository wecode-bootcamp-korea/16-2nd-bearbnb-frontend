import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './SearchBar.scss';
import './CalendarCustom.scss';

class SearchBar extends Component {
  render() {
    const {
      clickTab,
      startDate,
      endDate,
      adult,
      child,
      kid,
      onDatesChange,
      focusedInput,
      onFocusChange,
      inputValHandler,
      searchInputValue,
      goToList,
    } = this.props;

    return (
      <div className="SearchBar">
        <div onClick={() => clickTab(1)} className="searchItem">
          <span className="searchName">위치</span>
          <input
            onChange={inputValHandler}
            value={searchInputValue}
            className="searchSubName"
            type="text"
            placeholder="어디로 여행가세요?"
          />
        </div>
        <div className="searchItem calendar">
          <div className="calendarLabel">
            <span className="searchName">체크인</span>
            <span className="searchName">체크아웃</span>
          </div>
          <div>
            <DateRangePicker
              initialStartDate={startDate}
              initialEndDate={endDate}
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
          </div>
        </div>
        <div onClick={() => clickTab(4)} className="searchItem">
          <span className="searchName">인원</span>
          <span
            className={
              adult > 0 || child > 0 ? 'selectedGuest' : 'searchSubName'
            }
          >
            {adult === 0 && child === 0 && kid === 0
              ? '게스트 추가'
              : kid === 0
              ? `게스트 ${adult + child}명`
              : `게스트 ${adult + child}명, 유아 ${kid}명`}
          </span>
        </div>
        <div className="searchItem">
          <button onClick={goToList} type="button">
            <img alt="searchBtn" src="/images/Nav/search.png" />
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBar);
