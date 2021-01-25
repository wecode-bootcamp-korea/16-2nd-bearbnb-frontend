import React, { Component } from 'react';
import './Logo.scss';

class Logo extends Component {
  render() {
    const { scrollTop } = this.props;

    return (
      <header className="Logo">
        <img
          alt="bearbnb"
          src={
            scrollTop ? '/images/Nav/redbear.png' : '/images/Nav/whitebear.png'
          }
        />
        <h1 className={scrollTop ? 'redLogo' : 'whiteLogo'}>bearbnb</h1>
      </header>
    );
  }
}

export default Logo;
