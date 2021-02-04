import React from 'react';
import styled from 'styled-components';

function Input({
  id,
  type,
  placeholder,
  alt,
  src,
  showpwView,
  handleInputValue,
}) {
  return (
    <InputWrapper>
      <InputText>
        <InputBar
          id={id}
          onChange={handleInputValue}
          type={type}
          placeholder={placeholder}
        />
      </InputText>
      <InputIcon>
        <InputImages onClick={showpwView} alt={alt} src={src} />
      </InputIcon>
    </InputWrapper>
  );
}

export default Input;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 520px;
  height: 48px;
  margin-bottom: 16px;
  border: 1px solid rgb(228, 228, 228);
  border-radius: 4px;
`;

const InputText = styled.div`
  width: 491px;
  height: 100%;
`;

const InputBar = styled.input`
  width: 100%;
  height: 100%;
  padding: 11px;
  cursor: text;
  font-size: 16px;
`;

const InputIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 27px;
  height: 100%;
  padding-right: 11px;
`;

const InputImages = styled.img`
  width: 16px;
  height: 16px;
`;
