import React from 'react';
import styled from 'styled-components';

const Header = ({ data }) => {
  return (
    <Section>
      <h1>{data.name}</h1>
      <Div>
        <div>
          <img alt="star" src="/images/Detail/star.png" />
          <span>{data.rating}</span>
          <span>{data.address && data.address.slice(0, 6)}</span>
        </div>
        <Icons>
          <div>
            <img alt="share" src="/images/Detail/upload.png" />
            <span>공유하기</span>
          </div>
          <div>
            <img alt="heart" src="/images/Detail/heart.png" />
            <span>저장하기</span>
          </div>
        </Icons>
      </Div>
    </Section>
  );
};

export default Header;

const Section = styled.section`
  h1 {
    font-size: 26px;
  }
`;

const Div = styled.div`
  margin: 24px 0;
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  div {
    display: flex;
    img {
      margin-right: 4px;
      display: block;
      width: 14px;
      height: 14px;
    }

    span {
      margin-right: 7px;
      color: #222222;
      font-weight: 600;

      &:last-child {
        color: rgb(113, 113, 113);
        font-weight: 400;
      }
    }
  }
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
      margin-right: 10px;
    }

    span {
      color: #222222;
      font-weight: 600;
      text-decoration: underline;
    }
  }
`;
