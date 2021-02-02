import React, { Component } from 'react';
import styled from 'styled-components';
import BottomButtons from './BottomButtons';
class Price extends Component {
  render() {
    return (
      <div>
        <PriceWrapper>
          <UpperContentWrapper>
            <UpperContent>
              <p>평균 1박 요금은 ₩52,941입니다</p>
            </UpperContent>
          </UpperContentWrapper>
          <BottomButtons />
        </PriceWrapper>
      </div>
    );
  }
}

export default Price;

const PriceWrapper = styled.div`
  position: absolute;
  width: 442px;
  height: 331px;
  background-color: white;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  z-index: 10;
  left: 245px;
`;

const UpperContentWrapper = styled.div`
  padding: 20px;
  height: 264px;
  border-bottom: 1px solid rgb(200, 200, 200);
`;

const UpperContent = styled.div``;
