import React from 'react';
import styled from 'styled-components';

export const PriceDetail = ({ data, dateDiff }) => {
  return (
    <Wrapper>
      <p>예약 확정 전에는 요금이 청구되지 않습니다.</p>
      <PriceDesc>
        <p>{`￦${Number(data.price * 1).toLocaleString()} x ${dateDiff}박`}</p>
        <p>{`￦${Number(data.price * 1 * dateDiff).toLocaleString()}`}</p>
      </PriceDesc>
      <TotalPrice>
        <p>총 합계</p>
        <p>{`￦${Number(data.price * 1 * dateDiff).toLocaleString()}`}</p>
      </TotalPrice>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: -1;

  p {
    margin: 16px 0 24px;
    color: #222222;
    font-size: 14px;
    text-align: center;
  }
`;

const PriceDesc = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 16px;
    text-decoration: underline;

    &:last-child {
      text-decoration: none;
    }
  }
`;

const TotalPrice = styled.div`
  height: 30px;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgb(221, 221, 221);

  p {
    text-decoration: none;
    font-size: 16px;
    font-weight: 800;
  }
`;
