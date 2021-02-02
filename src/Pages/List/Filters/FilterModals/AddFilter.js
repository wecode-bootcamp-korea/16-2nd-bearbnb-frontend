import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

class AddFilter extends Component {
  componentDidMount() {
    if (this.props.showModal === 'AddFilter') {
      document.body.style.overflow = 'hidden';
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
  }
  render() {
    const { showModal, toggleFilterModal } = this.props;
    return (
      <>
        <AddFilterWrapper showModal={showModal}>
          <Header>
            <UpperContent>
              <button onClick={toggleFilterModal}>X</button>
            </UpperContent>
          </Header>
          <CenterWrapper></CenterWrapper>
          <Footer>
            <BottomContent>
              <button>전체 삭제</button>
              <button>숙소 보기</button>
            </BottomContent>
          </Footer>
        </AddFilterWrapper>
        <Dimmer onClick={e => this.props.toggleFilterModal(e)} />
      </>
    );
  }
}

export default AddFilter;

const Dimmer = styled.div`
  padding: 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  z-index: 2;
`;

// const slideDown = keyframes`
//   0% {
//     transform: translate(-50%, -150%);
//   }
//   100%{
//     transform: translate(-50%, -50%);
//   }
// `;

const slideUp = keyframes`
  0%{
    transform: translate(-50%, -50%);
    opacity: 0.95;
  }
  100%{
    transform: translate(-50%, -150%);
    opacity: 1;
  }
`;

const AddFilterWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 780px;
  height: auto;
  background-color: white;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  z-index: 10;
  animation: 0.7s ${slideUp} forwards;
`;

// animation: ${props =>
//   props.showModal === `AddFilter`
//     ? `0.7s ${slideDown} forwards`
//     : `0.7s ${slideUp} forwards`}}

const Header = styled.header`
  padding: 24px 16px;
  height: 64px;
  border-bottom: 1px solid rgb(200, 200, 200);
`;

const CenterWrapper = styled.div`
  height: 100%;
  max-height: 100% !important;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  height: 80px;
  border-top: 1px solid rgb(200, 200, 200);
`;

const UpperContent = styled.div``;

const BottomContent = styled.div``;
