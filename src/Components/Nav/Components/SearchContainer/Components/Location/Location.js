import React from 'react';
import './Location.scss';

const Location = ({ searchList, searchInputValue, selectLocation }) => {
  const isInclude = searchList.some(item => item.gu.includes(searchInputValue));
  return (
    <ul className="Location">
      {searchInputValue && isInclude ? (
        searchList
          .filter(item => item.gu.includes(searchInputValue))
          .map(item => {
            return (
              <li onClick={() => selectLocation(item.gu)}>
                <div className="imgContainer">
                  <img alt="location" src="/images/Nav/location.png" />
                </div>
                <p>{item.gu}</p>
              </li>
            );
          })
      ) : (
        <li>
          <div className="imgContainer">
            <img alt="location" src="/images/Nav/location.png" />
          </div>
          <p>가까운 여행지 둘러보기</p>
        </li>
      )}
    </ul>
  );
};

export default Location;
