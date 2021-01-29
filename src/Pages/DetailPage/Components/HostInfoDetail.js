import React from 'react';
import styled from 'styled-components';

export const HostInfoDetail = ({ data }) => {
  return (
    <Wrapper>
      <LeftSide>
        <HostInfo>
          <div>
            <img alt={data.host} src={data.host_profile} />
            <img alt="medal" src="/images/Detail/medal.png" />
          </div>
          <h3>호스트: {data.host}님</h3>
        </HostInfo>
        <Icons>
          <div>
            <img alt="star" src="/images/Detail/star.png" />
            <span>후기 63개</span>
          </div>
          <div>
            <img alt="certificated" src="/images/Detail/shield.png" />
            <span>본인 인증 완료</span>
          </div>
        </Icons>
        <div>{data.hostDesc}</div>
      </LeftSide>
      <RightSide>
        <p>응답률: 100%</p>
        <p>응답시간: 1시간 이내</p>
        <button>호스트에게 연락하기</button>
      </RightSide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 48px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
  color: #222222;
  z-index: 100;
`;

const LeftSide = styled.div`
  width: 45%;
`;

const RightSide = styled.div`
  width: 45%;

  p {
    margin-bottom: 16px;
  }

  button {
    padding: 13px 23px;
    margin-top: 16px;
    border: 1px solid #222222;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 12px;

  div {
    display: flex;
    margin-right: 24px;
    img {
      display: block;
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  }
`;

const HostInfo = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;

  h3 {
    font-size: 22px;
  }

  div {
    width: 64px;
    height: 64px;
    margin-right: 16px;
    position: relative;

    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;

      &:last-child {
        width: 24px;
        height: 24px;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }
`;
