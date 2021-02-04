import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import SignPage from './Components/SignPage';

function Modal({ currentTab, closeLoginModal }) {
  const [pwView, setPwView] = useState(false);
  const [pageTab, setPageTab] = useState(currentTab);

  const showpwView = () => {
    setPwView(prev => !prev);
  };

  const clickTab = str => {
    setPageTab(str);
  };

  return (
    <div>
      {pageTab === 'SignPage' && (
        <SignPage closeLoginModal={closeLoginModal} clickTab={clickTab} />
      )}
      {pageTab === 'SignIn' && (
        <SignIn
          closeLoginModal={closeLoginModal}
          clickTab={clickTab}
          pwView={pwView}
          showpwView={showpwView}
        />
      )}
      {pageTab === 'SignUp' && (
        <SignUp
          closeLoginModal={closeLoginModal}
          clickTab={clickTab}
          pwView={pwView}
          showpwView={showpwView}
        />
      )}
    </div>
  );
}

export default withRouter(Modal);
