import React, { Component } from 'react';
import './Location.scss';

class Location extends Component {
  render() {
    return (
      <ul className="Location">
        <li>
          <div className="imgContainer">
            <img alt="location" src="/images/Nav/location.png" />
          </div>
          <p>가까운 여행지 둘러보기</p>
        </li>
      </ul>
    );
  }
}

export default Location;
