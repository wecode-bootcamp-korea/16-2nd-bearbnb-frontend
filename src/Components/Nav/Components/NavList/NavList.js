import React, { Component } from 'react';
import './NavList.scss';

class NavList extends Component {
  render() {
    return (
      <ul className="NavList">
        <li>숙소</li>
        <li>체험</li>
        <li>온라인 체험</li>
      </ul>
    );
  }
}

export default NavList;
