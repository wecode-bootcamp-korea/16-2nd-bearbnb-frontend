import React from 'react';
import styled from 'styled-components';

export const MenuTab = () => {
  return (
    <Wrapper>
      <List>
        <Items>사진</Items>
        <Items>편의시설</Items>
        <Items>후기</Items>
        <Items>위치</Items>
      </List>
      <Icons>
        <div>
          <img alt="share" src="/images/Detail/upload.png" />
          <span>공유하기</span>
        </div>
        <div>
          <img alt="heart" src="/images/Detail/heart.png" />
          <span>저장</span>
        </div>
      </Icons>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 0px;
  z-index: 3;
`;

const List = styled.ul`
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

const Items = styled.li`
  margin-right: 24px;
  color: #222222;
  font-size: 14px;
  font-weight: 600;
`;

const Icons = styled.div`
  display: flex;
  div {
    display: flex;

    &:first-child {
      margin-right: 13px;
    }

    &:hover {
      cursor: pointer;
    }

    img {
      display: block;
      width: 14px;
      height: 14px;
      margin-right: 10px;
    }

    span {
      color: #222222;
      font-size: 14px;
      font-weight: 600;
      text-decoration: underline;
    }
  }
`;
