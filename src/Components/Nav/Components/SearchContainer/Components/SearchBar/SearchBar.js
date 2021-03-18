import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './SearchBar.scss';
import './CalendarCustom.scss';

const SearchBar = ({
  clickTab,
  startDate,
  endDate,
  guestQty,
  onDatesChange,
  focusedInput,
  onFocusChange,
  inputValHandler,
  searchInputValue,
  goToList,
}) => {
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
            guestQty.adult > 0 || guestQty.child > 0
              ? 'selectedGuest'
              : 'searchSubName'
          }
        >
          {guestQty.adult === 0 && guestQty.child === 0 && guestQty.kid === 0
            ? '게스트 추가'
            : guestQty.kid === 0
            ? `게스트 ${guestQty.adult + guestQty.child}명`
            : `게스트 ${guestQty.adult + guestQty.child}명, 유아 ${
                guestQty.kid
              }명`}
        </span>
      </div>
      <div className="searchItem">
        <button onClick={goToList} type="button">
          <img alt="searchBtn" src="/images/Nav/search.png" />
        </button>
      </div>
    </div>
  );
};

export default withRouter(SearchBar);
