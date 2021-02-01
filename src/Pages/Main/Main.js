import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <section className="Main">
        <div className="content">
          <h1>
            이제, 여행은
            <br />
            가까운 곳에서
          </h1>
          <Link to="/">
            <div>근처의 숙소 둘러보기</div>
          </Link>
        </div>
      </section>
    );
  }
}

export default Main;
