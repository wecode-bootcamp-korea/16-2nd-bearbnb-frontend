import React from 'react';
import styled from 'styled-components';

const HostInfo = ({ data }) => {
  return (
    <Wrapper>
      <SpaceDesc>
        <h3>
          {data.host}님이 호스팅하는 {data.propert_name}
        </h3>
        <p>
          최대 인원 {data.max_people}명 · 침실 {data.bedroom_quantity}개 · 침대
          {data.bed_quantity_sum}개 · 욕실 {data.bathroom_quantity}개
        </p>
      </SpaceDesc>
      <SpaceType>
        <img alt="home" src="/images/Detail/home.png" />
        <div>
          <p>{data.propert_name} 전체</p>
          <p>{data.propert_name} 전체를 단독으로 사용하시게 됩니다.</p>
        </div>
      </SpaceType>
      <SpaceInfo>
        <div>{data.description}</div>
        <LinkToHost>호스트에게 연락하기</LinkToHost>
      </SpaceInfo>
    </Wrapper>
  );
};

export default HostInfo;

const Wrapper = styled.section`
  width: 100%;
`;

const SpaceDesc = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid rgb(221, 221, 221);
  h3 {
    margin-bottom: 8px;
    font-size: 22px;
  }

  p {
    font-size: 16px;
  }
`;

const SpaceType = styled.div`
  padding: 32px 0;
  display: flex;
  border-bottom: 1px solid rgb(221, 221, 221);

  img {
    width: 32px;
    height: 32px;
    margin-right: 16px;
    display: block;
  }

  div {
    p {
      font-size: 16px;
      font-weight: 600;

      &:first-child {
        margin-bottom: 4px;
      }

      &:last-child {
        font-size: 14px;
        font-weight: 400;
        color: rgb(113, 113, 113);
      }
    }
  }
`;

const SpaceInfo = styled.div`
  padding: 32px 0 48px;
  border-bottom: 1px solid rgb(221, 221, 221);

  div {
    margin-bottom: 40px;
  }
`;

const LinkToHost = styled.a`
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
`;
