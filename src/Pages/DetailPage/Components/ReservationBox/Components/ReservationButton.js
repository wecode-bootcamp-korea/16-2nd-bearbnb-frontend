import React from 'react';
import styled from 'styled-components';

export const ReservationButton = ({ startDate, endDate }) => {
  return (
    <Button>{startDate && endDate ? '예약하기' : '예약 가능 여부 보기'}</Button>
  );
};

const Button = styled.button`
  width: 100%;
  height: 48px;
  padding: 14px 24x;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  z-index: -1;
`;
