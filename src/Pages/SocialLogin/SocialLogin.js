import React, { useEffect } from 'react';
import { SOCIAL_API } from '../../config';

const { Kakao } = window;

const kakaoApi = process.env.REACT_APP_KAKAO_API;

export const SocialLogin = () => {
  useEffect(() => {
    Kakao.init(kakaoApi);
  }, []);

  const clickHandler = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(`${SOCIAL_API}`, {
          method: 'POST',
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem('kakao_token', res.token);
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  return <div onClick={clickHandler}>카카오 계정으로 로그인</div>;
};
