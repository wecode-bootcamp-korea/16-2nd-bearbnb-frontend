import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const ReviewList = ({ data }) => {
  const [reviewData, setReviewDate] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch('/data/Review.json');
    const data = await res.json();
    setReviewDate(data.REVIEWS);
  };

  return (
    <Section>
      <Header>
        <img alt="star" src="/images/Detail/star.png" />
        <h3>{data.rating}점(후기 6개)</h3>
      </Header>
      <AverageRate>
        {rateAvg.map(rate => {
          return (
            <div>
              <span>{rate.type}</span>
              <div>
                <Line />
                <span>{rate.rate}</span>
              </div>
            </div>
          );
        })}
      </AverageRate>
      <ReviewContent>
        {reviewData.map(review => {
          return (
            <ReviewItem>
              <div>
                <img alt={review.name} src={review.img} />
                <div>
                  <span>{review.name}</span>
                  <span>{review.posted}</span>
                </div>
              </div>
              {review.content}
            </ReviewItem>
          );
        })}
      </ReviewContent>
    </Section>
  );
};

const Section = styled.section`
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgb(221, 221, 221);
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  img {
    display: block;
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  h3 {
    font-size: 22px;
    font-weight: 600;
    color: #222222;
  }
`;

const AverageRate = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-bottom: 32px;

  div {
    width: 45%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    span {
      &:last-child {
        font-size: 12px;
        font-weight: 600;
      }
    }
  }
`;

const ReviewContent = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 16px;
`;

const ReviewItem = styled.div`
  width: 45%;
  height: 184px;

  div {
    display: flex;
    align-items: center;
    padding-bottom: 12px;

    img {
      display: block;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      margin-right: 12px;
    }

    div {
      display: flex;
      flex-direction: column;

      span {
        &:first-child {
          font-size: 16px;
          color: #222222;
          font-weight: 600;
        }

        &:last-child {
          font-size: 14px;
          color: #717171;
        }
      }
    }
  }
`;

const Line = styled.div`
  width: 116.55px;
  height: 4px;
  background-color: #222222;
  border-radius: 2px;
  margin-right: 6px;
`;

const rateAvg = [
  {
    type: '청결도',
    rate: 4.9,
  },
  {
    type: '정확성',
    rate: 4.5,
  },
  {
    type: '의사소통',
    rate: 3.5,
  },
  {
    type: '위치',
    rate: 5.0,
  },
  {
    type: '체크인',
    rate: 5.0,
  },
  {
    type: '가격 대비 만족도',
    rate: 5.0,
  },
];
