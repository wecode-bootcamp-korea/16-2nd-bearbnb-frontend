import React from 'react';
import styled from 'styled-components';

const Facility = ({ data }) => {
  return (
    <Wrapper>
      <h3>편의시설</h3>
      <Icons>
        {data.option &&
          data.option.map(option => {
            return (
              <div>
                <img alt={option.name} src={option.url} />
                <span>{option.name}</span>
              </div>
            );
          })}
      </Icons>
    </Wrapper>
  );
};

export default Facility;

const Wrapper = styled.div`
  padding: 48px 0;

  h3 {
    margin-bottom: 24px;
    font-size: 22px;
    font-weight: 600;
  }
`;

const Icons = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  div {
    width: 50%;
    display: flex;
    margin-bottom: 16px;

    img {
      margin-right: 16px;
      display: block;
      width: 24px;
      height: 24px;
    }
  }
`;
