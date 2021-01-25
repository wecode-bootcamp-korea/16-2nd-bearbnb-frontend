import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {
  render() {
    const { clickTab, startDate, endDate, adult, child, kid } = this.props;
    return (
      <div className="SearchBar">
        <div onClick={() => clickTab(1)} className="searchItem">
          <span className="searchName">위치</span>
          <input
            className="searchSubName"
            type="text"
            placeholder="어디로 여행가세요?"
          />
        </div>
        <div onClick={() => clickTab(2)} className="searchItem">
          <span className="searchName">체크인</span>
          <span className={startDate ? 'selectedDate' : 'searchSubName'}>
            {startDate !== null
              ? `${startDate._d.getMonth() + 1}월 ${startDate._d.getDate()}일`
              : `날짜추가`}
          </span>
        </div>
        <div onClick={() => clickTab(3)} className="searchItem">
          <span className="searchName">체크아웃</span>
          <span className={endDate ? 'selectedDate' : 'searchSubName'}>
            {endDate !== null
              ? `${endDate._d.getMonth() + 1}월 ${endDate._d.getDate()}일`
              : `날짜추가`}
          </span>
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
          <button type="button">
            <img alt="searchBtn" src="/images/Nav/search.png" />
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
