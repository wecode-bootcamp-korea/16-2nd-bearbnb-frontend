import React from 'react';
import styled from 'styled-components';

function Line() {
  return (
    <LineWrapper>
      <LineOr>또는</LineOr>
    </LineWrapper>
  );
}

export default Line;

const LineWrapper = styled.div`
  width: 520px;
  height: 20px;
  margin: 16px 0;
  font-size: 14px;
  text-align: center;
`;

const LineOr = styled.span`
  position: relative;
  padding: 16px;
  color: rgb(118, 118, 118);

  &:before {
    position: absolute;
    top: 50%;
    right: 100%;
    width: 231px;
    border-bottom: 1px solid rgb(228, 228, 228);
    content: '';
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 100%;
    width: 231px;
    height: 1px;
    border-bottom: 1px solid rgb(228, 228, 228);
    content: '';
  }
`;
