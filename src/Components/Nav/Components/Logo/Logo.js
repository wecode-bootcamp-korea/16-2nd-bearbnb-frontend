import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

class Logo extends Component {
  render() {
    const { scrollTop, currentUrl } = this.props;

    return (
      <Link to="/">
        <header className="Logo">
          <img
            alt="bearbnb"
            src={
              scrollTop || currentUrl !== '/'
                ? '/images/Nav/redbear.png'
                : '/images/Nav/whitebear.png'
            }
          />
          <h1
            className={
              scrollTop || currentUrl !== '/' ? 'redLogo' : 'whiteLogo'
            }
          >
            bearbnb
          </h1>
        </header>
      </Link>
    );
  }
}

export default Logo;
