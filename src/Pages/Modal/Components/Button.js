import React from 'react';
import styled, { css } from 'styled-components';

function Button({
  content,
  type,
  signDataImg,
  clickTab,
  buttonPage,
  checkLoginValidation,
  checkSignupValidation,
}) {
  return (
    <ButtonContainer
      type={type}
      onClick={
        type === 'signIn'
          ? checkLoginValidation
          : type === 'signUp'
          ? checkSignupValidation
          : () => clickTab(buttonPage)
      }
    >
      {signDataImg?.src && (
        <ButtonImg alt={signDataImg?.alt} src={signDataImg?.src} />
      )}
      {content}
    </ButtonContainer>
  );
}

export default Button;

const ButtonContainer = styled.button`
  width: 520px;
  height: 48px;
  padding: 10px 22px;
  background-color: #fb5b5f;
  border-radius: 4px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  ${props =>
    props.type === 'google' &&
    css`
      background-color: white;
      border: 2px solid rgb(118, 118, 118);
      color: #484848;
    `}
  ${props =>
    props.type === 'kakao' &&
    css`
      background-color: #f7e10d;
      cursor: pointer;
      color:color: rgb(72, 72, 72);
      margin-bottom: 10px;
    `}
`;

const ButtonImg = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 12px;
`;
