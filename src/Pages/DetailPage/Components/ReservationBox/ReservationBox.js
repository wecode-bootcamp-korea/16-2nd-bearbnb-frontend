import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ButtonBox } from './Components/ButtonBox';
import { ReservationButton } from './Components/ReservationButton';
import { PriceDetail } from './Components/PriceDetail';

export const ReservationBox = ({ data }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [openGuestBox, setOpenGuestBox] = useState(false);
  const [guest, setGuest] = useState({
    adult: 1,
    child: 0,
    kid: 0,
  });
  const [dateDiff, setDateDiff] = useState(0);
  // const [hideGuestBox, setHideGuestBox] = useState(false);
  // const guestBoxRef = useRef(null);

  // useEffect(() => {
  //   document.addEventListener('click', toggleShowGuestBox, false);
  //   return () => {
  //     document.removeEventListener('click', toggleShowGuestBox, false);
  //   };
  // }, []);

  // const toggleShowGuestBox = evt => {
  //   if (guestBoxRef.current && !guestBoxRef.current.contains(evt.target)) {
  //     setHideGuestBox(true);
  //   }
  // };

  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    if (startDate && endDate) {
      const diff =
        Math.ceil(Math.abs(endDate._d.getTime() - startDate._d.getTime())) /
        (1000 * 3600 * 24);
      setDateDiff(diff);
    }
  };

  const onFocusChange = focusedInput => {
    setFocusedInput(focusedInput);
  };

  const toggleGuestBox = () => {
    setOpenGuestBox(prev => !prev);
  };

  const controllQuantity = ({ target }, selectedOne) => {
    const { alt } = target;
    alt === 'minus'
      ? setGuest(prev => ({ ...prev, [selectedOne]: prev[selectedOne] - 1 }))
      : setGuest(prev => ({ ...prev, [selectedOne]: prev[selectedOne] + 1 }));
  };

  return (
    <Wrapper startDate={startDate} endDate={endDate}>
      <Header>
        <div>
          <h3>
            {startDate && endDate
              ? `￦ ${Number(data.price * 1).toLocaleString()} /박`
              : `요금을 확인할려면
            날짜를 입력하세요.`}
          </h3>
        </div>
        <Rating>
          <img alt="star" src="/images/Detail/star.png" />
          <span>{data.rating}</span>
        </Rating>
      </Header>
      <ButtonBox
        startDate={startDate}
        endDate={endDate}
        onDatesChange={onDatesChange}
        focusedInput={focusedInput}
        onFocusChange={onFocusChange}
        // guestBoxRef={guestBoxRef}
        openGuestBox={openGuestBox}
        toggleGuestBox={toggleGuestBox}
        guest={guest}
        controllQuantity={controllQuantity}
      />
      <ReservationButton startDate={startDate} endDate={endDate} />
      {startDate && endDate && <PriceDetail data={data} dateDiff={dateDiff} />}
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 365px;
  height: ${props => (props.startDate && props.endDate ? '480px' : '300px')};
  padding: 24px;
  margin-bottom: 24px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 24px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
`;

const Header = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;

  h3 {
    width: 160px;
    height: 52px;
  }
`;

const Rating = styled.div`
  padding-top: 15px;
  display: flex;

  img {
    margin-right: 4px;
    display: block;
    width: 14px;
    height: 14px;
  }

  span {
    margin-right: 7px;
    color: #222222;
    font-size: 14px;
    font-weight: 600;
  }
`;
