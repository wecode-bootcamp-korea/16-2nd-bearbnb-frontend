import React from 'react';
import styled from 'styled-components';

function BottomButtons(props) {
  return (
    <BottomContentWrapper>
      <BottomContent>
        <button>지우기</button>
        <button>저장</button>
      </BottomContent>
    </BottomContentWrapper>
  );
}

export default BottomButtons;

const BottomContentWrapper = styled.div`
  height: 65px;
  align-content: center;
`;

const BottomContent = styled.div`
  padding: 12px 14px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
