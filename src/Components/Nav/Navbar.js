import React from 'react';
import SearchContainer from './Components/SearchContainer/SearchContainer';
import Profile from './Components/Profile/Profile';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Header>
      <Logo>
        <img alt="bearbnb" src="/images/Nav/redbear.png" />
        <h1>bearbnb</h1>
      </Logo>
      <Wrapper>
        <SearchContainer />
      </Wrapper>
      <Profile />
    </Header>
  );
};

export default Navbar;

const Header = styled.header`
  padding: 0 80px;
  width: 100%;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    display: block;
    width: 40px;
    height: 40px;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: #ff385c;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
