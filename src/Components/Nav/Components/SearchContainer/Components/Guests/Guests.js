import React, { Component } from 'react';
import './Guests.scss';

const Guests = props => {
  return (
    <ul className="Guests">
      {GUEST_LIST.map(guest => {
        const { id, type, condition } = guest;
        return (
          <li key={id}>
            <div className="guestName">
              <span>{type}</span>
              <span>{condition}</span>
            </div>
            <div className="btnGroup">
              <button
                onClick={evt => props.controllQuantity(evt, id)}
                type="button"
                disabled={props[id] === 0 && true}
                className={props[id] === 0 ? 'disabledBtn' : ''}
              >
                <img
                  alt="minus"
                  name="minus"
                  src={
                    props[id] === 0
                      ? '/images/Nav/disabledBtn.png'
                      : '/images/Nav/minus.png'
                  }
                />
              </button>
              <span>{props[id]}</span>
              <button
                onClick={evt => props.controllQuantity(evt, id)}
                type="button"
              >
                <img alt="add" name="plus" src="/images/Nav/add.png" />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Guests;

const GUEST_LIST = [
  {
    id: 'adult',
    type: '성인',
    condition: '만 13세 이상',
  },
  {
    id: 'child',
    type: '어린이',
    condition: '2~12세',
  },
  {
    id: 'kid',
    type: '유아',
    condition: '2세 미만',
  },
];
