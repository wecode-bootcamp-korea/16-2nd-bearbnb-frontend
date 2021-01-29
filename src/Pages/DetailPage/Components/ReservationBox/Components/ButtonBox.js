import React from 'react';
import styled from 'styled-components';
import { Calendar } from './Calendar';
import { GuestBoxList } from './GuestBoxList';

export const ButtonBox = props => {
  const {
    startDate,
    endDate,
    onDatesChange,
    focusedInput,
    onFocusChange,
    openGuestBox,
    toggleGuestBox,
    guest,
    controllQuantity,
    guestBoxRef,
  } = props;

  return (
    <Wrapper>
      <DateButtonContainer>
        <DateButton>
          <Label>
            <div>체크인</div>
            <div>체크아웃</div>
          </Label>
          <CalendarContainer>
            <Calendar
              startDate={startDate}
              endDate={endDate}
              onDatesChange={onDatesChange}
              focusedInput={focusedInput}
              onFocusChange={onFocusChange}
            />
          </CalendarContainer>
        </DateButton>
      </DateButtonContainer>
      <GuestBox onClick={toggleGuestBox}>
        <GuestButton>
          <span>인원</span>
          <span>
            {guest.kid === 0
              ? `게스트 ${guest.adult + guest.child}명`
              : `게스트 ${guest.adult + guest.child}명, 유아 ${guest.kid}명`}
          </span>
        </GuestButton>
        <img
          alt="dropdown"
          src={
            openGuestBox
              ? '/images/Detail/up-arrow.png'
              : '/images/Detail/down-arrow.png'
          }
        />
      </GuestBox>
      <div>
        {openGuestBox && (
          <GuestBoxList guest={guest} controllQuantity={controllQuantity} />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 112px;
  margin-bottom: 16px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
`;

const DateButtonContainer = styled.div`
  height: 50%;
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

const DateButton = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgb(221, 221, 221);

  &:last-child {
    border-right: none;
  }
`;

const Label = styled.div`
  width: 100%;
  display: flex;

  div {
    width: 50%;
    font-size: 10px;
    font-weight: 800;
    color: rgb(34, 34, 34);
  }
`;

const CalendarContainer = styled.div`
  width: 100%;
`;

const GuestBox = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  border-top: 1px solid rgb(221, 221, 221);

  &:hover {
    cursor: pointer;
  }

  img {
    width: 16px;
    height: 16px;
    display: block;
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
  }
`;

const GuestButton = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;

  &:last-child {
    border-right: none;
  }

  span {
    font-size: 10px;
    font-weight: 800;
    color: rgb(34, 34, 34);

    &:last-child {
      font-size: 14px;
      font-weight: 300;
      color: rgb(113, 113, 113);
    }
  }
`;
