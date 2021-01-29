import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
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
      </>
    );
  }
}

export default Main;
