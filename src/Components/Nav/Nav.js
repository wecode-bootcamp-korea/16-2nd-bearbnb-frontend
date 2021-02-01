import React from 'react';
import { withRouter } from 'react-router-dom';
import Logo from './Components/Logo/Logo';
import NavList from './Components/NavList/NavList';
import Profile from './Components/Profile/Profile';
import SearchContainer from './Components/SearchContainer/SearchContainer';
import './Nav.scss';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      scrollTop: 0,
      isShowing: false,
    };
  }

  componentDidMount() {
    this.props.location.pathname === '/' &&
      window.addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  scrollHandler = (evt, prevState) => {
    const scrollTop = ('scroll', evt.srcElement.scrollingElement.scrollTop);

    this.setState({
      scrollTop,
    });

    if (prevState?.scrollTop !== this.state.scrollTop) {
      this.setState({
        isShowing: false,
      });
    }
  };

  showSearchContainer = () => {
    this.setState({
      isShowing: !this.state.isShowing,
    });
  };

  render() {
    const currentUrl = this.props.location.pathname;
    const { scrollTop, isShowing } = this.state;

    return (
      <div className="NavContainer">
        {currentUrl === '/' ? (
          <>
            <nav
              className={scrollTop > 10 ? 'Nav scrolled' : 'Nav'}
              onScroll={this.scrollHandler}
            >
              <Logo scrollTop={scrollTop} currentUrl={currentUrl} />
              <div className="navList">
                {scrollTop > 10 ? (
                  <div
                    onClick={this.showSearchContainer}
                    className={
                      isShowing ? 'SearchBar hide' : 'SearchBar scrolled'
                    }
                  >
                    검색 시작하기
                    <div className="searchItem">
                      <button type="button">
                        <img alt="searchBtn" src="/images/Nav/search.png" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <NavList />
                )}
              </div>
              <Profile />
            </nav>
            <div
              className={
                isShowing
                  ? 'searchContainer show'
                  : scrollTop > 10
                  ? 'searchContainer hide'
                  : 'searchContainer'
              }
            >
              <SearchContainer />
            </div>
          </>
        ) : (
          <nav className="Nav fixed">
            <Logo />
            <SearchContainer />
            <Profile />
          </nav>
        )}
      </div>
    );
  }
}

export default withRouter(Nav);
