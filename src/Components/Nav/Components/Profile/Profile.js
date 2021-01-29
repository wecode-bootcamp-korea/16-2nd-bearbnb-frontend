import React, { Component } from 'react';
import ProfileBox from './Components/ProfileBox';
import './Profile.scss';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
    };
  }

  showProfileBox = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    const { isShow } = this.state;
    return (
      <div onClick={this.showProfileBox} className="Profile">
        <img className="menuIcon" alt="menu" src="/images/Nav/menu.png" />
        <img
          className="profileIcon"
          alt="profile"
          src="/images/Nav/profile-user.png"
        />
        <div className="profileBox">{isShow && <ProfileBox />}</div>
      </div>
    );
  }
}

export default Profile;
