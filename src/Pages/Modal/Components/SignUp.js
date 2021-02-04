import React, { useState } from 'react';
import Button from './Button';
import Form from './Form';
import Input from './Input';
import UploadImg from './UploadImg';
import styled from 'styled-components';
import { signUpData } from '../Data/ModalData';
import { SIGNUP_API } from '../../../config';

function SignUp({ showpwView, pwView, clickTab, closeLoginModal }) {
  const [signupValue, setSignupValue] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
  });
  const [userImg, setUserImg] = useState('');

  const handleSignupInputValue = e => {
    const { id, value } = e.target;
    setSignupValue(prev => ({ ...prev, [id]: value }));
  };
  const checkSignupValidation = () => {
    const checkId = signupValue.email.includes('@');
    const checkPw = signupValue.password.length > 7;
    const checkFirstname = signupValue.firstname.length >= 1;
    const checkLastname = signupValue.lastname.length >= 1;

    const jsondata = {
      email: signupValue.email,
      password: signupValue.password,
      first_name: signupValue.firstname,
      last_name: signupValue.lastname,
    };
    const formData = new FormData();
    formData.append('profile_photo', userImg);
    formData.append('json', JSON.stringify(jsondata));

    if (!checkId) {
      alert('아이디는 이메일형식 입니다.');
    }
    if (!checkPw) {
      alert('비밀번호는 8자 이상입니다.');
    }
    if (!checkFirstname) {
      alert('성을 입력해주세요.');
    }
    if (!checkLastname) {
      alert('이름을 입력해주세요.');
    }
    if (checkId && checkPw && checkFirstname && checkLastname) {
      alert('회원가입 성공');
      fetch(SIGNUP_API, {
        method: 'POST',
        body: formData,
      })
        .then(res => res.json())
        .then(result => {
          if (result.message === 'SUCCESS') {
            clickTab('SignIn');
          }
        });
    }
  };

  return (
    <SignUpBox>
      <SignUpWrapper>
        <Form
          closeLoginModal={closeLoginModal}
          signData={signUpData}
          clickTab={clickTab}
        >
          <FlexBox>
            <UploadImg setUserImg={setUserImg} />
          </FlexBox>
          <FormLine>
            <LineAll></LineAll>
          </FormLine>
          {signUpData?.inputtype.map((el, idx) => {
            return (
              <Input
                handleInputValue={handleSignupInputValue}
                showpwView={showpwView}
                id={el.id}
                key={idx}
                type={el.type === 'password' && pwView ? 'text' : el.type}
                placeholder={el.placeholder}
                alt={el.alt}
                src={
                  el.src === './images/signUpEye.svg' && pwView
                    ? './images/signUpEye2.svg'
                    : el.src
                }
              />
            );
          })}
          <Marketing>{signUpData?.marketing}</Marketing>
          <MarketingButton>
            <MarketingCheck type="checkbox" />
            {signUpData?.marketingcheck}
          </MarketingButton>
          <Button
            checkSignupValidation={checkSignupValidation}
            type="signUp"
            content={'가입하기'}
          />
        </Form>
      </SignUpWrapper>
    </SignUpBox>
  );
}

export default SignUp;

const SignUpBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const SignUpWrapper = styled.div`
  width: auto;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlexBox = styled.div`
  width: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Marketing = styled.div`
  width: 520px;
  overflow-wrap: break-word;
  word-break: keep-all;
  font-size: 14px;
  color: rgb(72, 72, 72);
`;

const MarketingButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 520px;
  height: 23px;
  margin: 20px 0;
`;

const MarketingCheck = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  font-size: 14px;
  color: rgb(72, 72, 72);
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
