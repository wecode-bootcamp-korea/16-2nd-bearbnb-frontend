import React from 'react';
import styled from 'styled-components';

function Form({ signData, children, clickTab, closeLoginModal }) {
  return (
    <FormWrapper>
      <HeaderBtn onClick={closeLoginModal}>
        <HeaderBtnImg alt="close" src="./images/close.svg" />
      </HeaderBtn>
      <HeaderTextWrapper>
        <HeaderText>{signData?.headertext}</HeaderText>
      </HeaderTextWrapper>
      <MainWrapper>
        {children}
        <FormLine>
          <LineAll></LineAll>
        </FormLine>
        <TextWrapper>
          <TextSpan>
            {signData?.footertext}
            <TextButton onClick={() => clickTab(signData?.pageName)}>
              {signData?.footerbutton}
            </TextButton>
          </TextSpan>
        </TextWrapper>
      </MainWrapper>
    </FormWrapper>
  );
}

export default Form;

const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 568px;
  border-radius: 12px;
  background-color: white;
`;

const HeaderBtn = styled.button`
  position: absolute;
  left: 12px;
  top: 12px;
  width: 32px;
  height: 32px;
`;

const HeaderBtnImg = styled.img`
  width: 11px;
  height: 11px;
`;

const HeaderTextWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 568px;
  height: 63px;
  padding: 0 24px;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

const HeaderText = styled.div`
  font-weight: 700;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 568px;
  padding: 24px;
`;

const FormLine = styled.div`
  width: 520px;
  height: 1px;
  margin: 16px 0;
`;

const LineAll = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(228, 228, 228);
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 22px;
  font-size: 16px;
`;

const TextSpan = styled.span`
  font-weight: 400;
`;

const TextButton = styled.button`
  margin: 0 8px;
  font-size: 16px;
  color: #188389;
`;
