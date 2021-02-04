import React from 'react';
import Button from './Button';
import Line from './Line';
import Form from './Form';
import styled from 'styled-components';
import { signPageData } from '../Data/ModalData';

function SignPage({ clickTab, closeLoginModal }) {
  return (
    <SignPageBox>
      <SignPageWrapper>
        <Form
          closeLoginModal={closeLoginModal}
          signData={signPageData}
          clickTab={clickTab}
        >
          <div className="socialWrapper">
            <div className="kakaoLogin">
              <Button type="kakao" content={'카카오 계정으로 회원 가입'} />
            </div>
            <Button
              signDataImg={signPageData?.googleImg}
              type="google"
              content={'구글 계정으로 회원 가입'}
            />
          </div>
          <Line />
          <Button
            clickTab={clickTab}
            buttonPage={signPageData?.buttonPage}
            signDataImg={signPageData?.emailImg}
            type="email"
            content={'이메일로 회원 가입'}
          />
        </Form>
      </SignPageWrapper>
    </SignPageBox>
  );
}

export default SignPage;

const SignPageBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const SignPageWrapper = styled.div`
  width: auto;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
