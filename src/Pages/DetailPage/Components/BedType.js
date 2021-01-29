import React from 'react';
import styled from 'styled-components';

const BedType = ({ data }) => {
  return (
    <Wrapper>
      <h3>침대/침구 유형</h3>
      <TypeContainer>
        <ImgContainer>
          <img alt="bed" src="/images/Detail/bed.png" />
          <img alt="sofa" src="/images/Detail/sofa.png" />
        </ImgContainer>
        <h4>1번 침실</h4>
        <p>퀸사이즈 침대 1개, 소파 1개</p>
      </TypeContainer>
    </Wrapper>
  );
};

export default BedType;

const Wrapper = styled.div`
  padding: 48px 0;
  border-bottom: 1px solid rgb(221, 221, 221);

  h3 {
    margin-bottom: 24px;
    font-size: 22px;
    font-weight: 600;
  }
`;

const TypeContainer = styled.div`
  width: 220px;
  padding: 24px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;

  h4 {
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: rgb(113, 113, 113);
  }
`;

const ImgContainer = styled.div`
  display: flex;
  img {
    margin-right: 8px;
    display: block;
    width: 24px;
    height: 24px;
  }
`;
