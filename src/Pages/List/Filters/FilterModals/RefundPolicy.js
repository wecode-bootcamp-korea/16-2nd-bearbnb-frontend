import React, { Component } from 'react';
import styled from 'styled-components';
import BottomButtons from './BottomButtons';

class RefundPolicy extends Component {
  render() {
    // return <div className="RefundPolicy"></div>;
    return (
      <div>
        <PolicyWrapper>
          <UpperContentWrapper>
            <UpperContent>
              <Label>유연한 환불 정책을 제공하는 숙소만 검색 결과에 표시</Label>
              <CheckBox type="checkbox"></CheckBox>
            </UpperContent>
          </UpperContentWrapper>
          <BottomButtons />
        </PolicyWrapper>
      </div>
    );
  }
}

export default RefundPolicy;

const PolicyWrapper = styled.div`
  position: absolute;

  width: 362px;
  height: 176px;
  background-color: white;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  z-index: 10;
`;

const UpperContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 66%;
  border-bottom: 1px solid rgb(200, 200, 200);
`;

const UpperContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.div`
  padding-right: 25px;
  font-size: 14px;
  color: gray;
`;
const CheckBox = styled.input`
  transform: scale(2);
`;
