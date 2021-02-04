import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Button from './Button';
import Line from './Line';
import Form from './Form';
import Input from './Input';
import styled from 'styled-components';
import { signInData } from '../Data/ModalData';
import { SIGNIN_API } from '../../../config';

function SignIn({ showpwView, pwView, clickTab, closeLoginModal }) {
  const history = useHistory();
  const [loginValue, setLoginValue] = useState({ email: '', password: '' });

  const handleLoginInputValue = e => {
    const { id, value } = e.target;
    setLoginValue(prev => ({ ...prev, [id]: value }));
  };

  const checkLoginValidation = () => {
    const checkId = loginValue.email.includes('@');
    const checkPw = loginValue.password.length > 7;

    if (!checkId) {
      alert('아이디는 이메일형식 입니다.');
    }
    if (!checkPw) {
      alert('비밀번호는 8자 이상입니다.');
    }
    if (checkId && checkPw) {
      alert('로그인 성공');
      fetch(SIGNIN_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginValue.email,
          password: loginValue.password,
        }),
      })
        .then(res => res.json())
        .then(result => {
          if (result.token) {
            closeLoginModal();
            localStorage.setItem('token', result.token);
            history.push('/');
          }
        });
    }
  };
  return (
    <SignInBox>
      <SignInWrapper>
        <Form
          closeLoginModal={closeLoginModal}
          signData={signInData}
          clickTab={clickTab}
        >
          <div className="socialWrapper">
            <div className="kakaoLogin">
              <Button type="kakao" content={'카카오 계정으로 로그인'} />
            </div>
            <Button
              signDataImg={signInData?.googleImg}
              type="google"
              content={'구글 계정으로 로그인'}
            />
          </div>
          <Line />
          {signInData?.inputtype.map(el => {
            return (
              <Input
                handleInputValue={handleLoginInputValue}
                id={el.id}
                type={el.type === 'password' && pwView ? 'text' : el.type}
                placeholder={el.placeholder}
                alt={el.alt}
                src={el.src}
              />
            );
          })}
          <PwText>
            <PwBtn onClick={showpwView}>
              {pwView ? '비밀번호 숨기기' : '비밀번호 보이기'}
            </PwBtn>
          </PwText>
          <Button
            checkLoginValidation={checkLoginValidation}
            signData={signInData?.emailImg}
            type="signIn"
            content={'로그인'}
          />
        </Form>
      </SignInWrapper>
    </SignInBox>
  );
}

export default SignIn;

const PwText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 520px;
  height: 20px;
  margin-bottom: 16px;
`;

const PwBtn = styled.button`
  font-size: 14px;
  color: #188389;
`;

const SignInBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const SignInWrapper = styled.div`
  width: auto;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
