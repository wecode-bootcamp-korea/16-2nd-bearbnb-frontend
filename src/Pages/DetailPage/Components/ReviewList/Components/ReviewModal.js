import React, { useState } from 'react';
import styled from 'styled-components';

export const ReviewModal = ({ data, reviewData, closeModal }) => {
  const [searchVal, setSearchVal] = useState('');

  const updateSearchVal = evt => {
    setSearchVal(evt.target.value);
  };

  return (
    <>
      <Wrapper onClick={closeModal} />
      <Modal>
        <Header>x</Header>
        <Content>
          <Rating>
            <img alt="star" src="/images/Detail/star.png" />
            <p>
              {data.rating}점(후기 {reviewData.length}개)
            </p>
          </Rating>
          <Reviews>
            <input
              onChange={updateSearchVal}
              type="text"
              placeholder="후기 검색"
              value={searchVal}
            />
            {searchVal === ''
              ? reviewData.map(review => {
                  return (
                    <Review>
                      <Reviewer>
                        <img alt={review.name} src={review.img} />
                        <div>
                          <p>{review.name}</p>
                          <p>{review.posted}</p>
                        </div>
                      </Reviewer>
                      <ReviewContent>{review.content}</ReviewContent>
                    </Review>
                  );
                })
              : reviewData
                  .filter(review => review.content.includes(searchVal))
                  .map(review => {
                    return (
                      <Review>
                        <Reviewer>
                          <img alt={review.name} src={review.img} />
                          <div>
                            <p>{review.name}</p>
                            <p>{review.posted}</p>
                          </div>
                        </Reviewer>
                        <ReviewContent>{review.content}</ReviewContent>
                      </Review>
                    );
                  })}
          </Reviews>
        </Content>
      </Modal>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;
`;

const Modal = styled.div`
  width: 1032px;
  height: 80vh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 12px;
  overflow: auto;
  z-index: 20;
`;

const Header = styled.div`
  height: 72px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Rating = styled.div`
  width: 30%;
  display: flex;

  img {
    display: block;
    width: 25px;
    height: 25px;
    margin-right: 8px;
  }
`;

const Reviews = styled.div`
  width: 60%;

  input {
    width: 100%;
    padding: 12px;
    margin-bottom: 24px;
    background-color: rgb(247, 247, 247);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 100px;
  }
`;

const Review = styled.div`
  display: flex;
  flex-direction: column;
`;

const Reviewer = styled.div`
  display: flex;
  margin-bottom: 16px;

  img {
    display: block;
    width: 56px;
    height: 56px;
    margin-right: 12px;
    border-radius: 50%;
  }

  p {
    font-size: 16px;
    color: #222222;

    &:last-child {
      font-size: 14px;
      color: rgb(113, 113, 113);
    }
  }
`;

const ReviewContent = styled.div`
  width: 100%;
  height: 100px;
  font-size: 14px;
`;
