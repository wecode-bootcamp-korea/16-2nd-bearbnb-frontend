export const signPageData = {
  id: '1',
  pageName: 'SignIn',
  type: 'signPage',
  headertext: '회원 가입',
  buttonPage: 'SignUp',
  buttontext: '이메일로 회원가입',
  footertext: '이미 에어비앤비 계정이 있나요?',
  footerbutton: '로그인',
  googleImg: {
    alt: 'googleLogo',
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png',
  },
  emailImg: {
    alt: 'emailLogo',
    src: '/images/emailWhite.svg',
  },
};

export const signInData = {
  id: '2',
  pageName: 'SignPage',
  type: 'signIn',
  headertext: '로그인',
  buttontext: '로그인',
  footertext: '에어비앤비 계정이 없으세요?',
  footerbutton: '회원 가입',
  googleImg: {
    alt: 'googleLogo',
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png',
  },
  emailImg: {
    alt: '',
    src: '',
  },
  inputtype: [
    {
      id: 'email',
      type: 'email',
      placeholder: '이메일 주소',
      alt: 'emialIcon',
      src: './images/emailBlack.svg',
    },
    {
      id: 'password',
      type: 'password',
      placeholder: '비밀번호',
      alt: 'lockIcon',
      src: './images/signLock.svg',
    },
  ],
};

export const signUpData = {
  id: '3',
  pageName: 'SignIn',
  type: 'signUp',
  headertext: '회원 가입',
  buttontext: '가입하기',
  footertext: '이미 에어비앤비 계정이 있나요?',
  footerbutton: '로그인',
  emailImg: {
    alt: 'none',
    src: 'none',
  },
  marketing:
    '에어비앤비의 회원 전용 할인, 추천 여행 정보, 프로모션 및 정책 변경사항을 이메일로 보내드립니다. 계정 관리의 환경설정 또는 프로모션 알림에서 언제든지 메시지 수신을 거부할 수 있습니다.',
  marketingcheck: '에어비앤비에서 보내는 마케팅 메시지를 받고 싶지 않습니다.',

  inputtype: [
    {
      id: 'email',
      type: 'email',
      placeholder: '이메일 주소',
      alt: 'emailIcon',
      src: './images/emailBlack.svg',
    },
    {
      id: 'lastname',
      type: 'text',
      placeholder: '이름(예: 길동)',
      alt: 'userIcon',
      src: './images/signUpUser.svg',
    },
    {
      id: 'firstname',
      type: 'text',
      placeholder: '성(예: 홍)',
      alt: 'userIcon',
      src: './images/signUpUser.svg',
    },
    {
      id: 'password',
      type: 'password',
      placeholder: '비밀번호 설정하기',
      alt: 'EyeIcon',
      src: './images/signUpEye.svg',
    },
  ],
};
