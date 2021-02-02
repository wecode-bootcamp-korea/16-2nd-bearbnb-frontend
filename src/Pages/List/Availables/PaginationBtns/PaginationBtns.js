import React, { Component } from 'react';
import styled from 'styled-components';
// import './PaginationBtns.scss';

class PaginationBtns extends Component {
  render() {
    const { pageNum, fetchRooms, dataLength, currentPage } = this.props;

    return (
      <Wrapper>
        <ButtonWrapper>
          {[...Array(pageNum)].map((_, idx) => {
            return (
              <Button
                key={idx + 1}
                currentPage={currentPage}
                onClick={() => fetchRooms(idx + 1)}
              >
                {idx + 1}
              </Button>
            );
          })}
        </ButtonWrapper>
        <SpaceNum>
          {dataLength === 0
            ? '검색 결과가 없습니다'
            : `숙소 ${dataLength}개중 ${1 * currentPage}~${20 * currentPage}개`}
        </SpaceNum>
        <Text>추가 수수료가 부과됩니다. 세금도 부과될 수 있습니다.</Text>
      </Wrapper>
    );
  }
}

export default PaginationBtns;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 180px;
  border-top: 1px solid rgb(202, 202, 202);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 22px;
  padding: 6px;
  border: 0 solid black;
  border-radius: 50%;

  ${props =>
    props.currentPage === props.key &&
    `
  font-weight: bolder;
  background-color: rgba(200, 200, 200, 0.7)
  `}
`;

const SpaceNum = styled.div``;

const Text = styled.div`
  font-size: 14px;
  color: gray;
`;
