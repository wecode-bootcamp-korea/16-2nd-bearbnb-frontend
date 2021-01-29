import React from 'react';
import styled from 'styled-components';

export const GuestBoxList = ({ guest, controllQuantity }) => {
  return (
    <List>
      {GUEST_LIST.map(guestList => {
        const { id, type, condition } = guestList;
        return (
          <ListItem key={id}>
            <Content>
              <span>{type}</span>
              <span>{condition}</span>
            </Content>
            <Buttons>
              <button
                type="button"
                onClick={evt => controllQuantity(evt, id)}
                disabled={guest[id] === 0 && true}
              >
                <img
                  alt="minus"
                  src={
                    guest[id] === 0
                      ? '/images/Nav/disabledBtn.png'
                      : '/images/Nav/minus.png'
                  }
                />
              </button>
              <span>{guest[id]}</span>
              <button type="button" onClick={evt => controllQuantity(evt, id)}>
                <img alt="plus" src="/images/Nav/add.png" />
              </button>
            </Buttons>
          </ListItem>
        );
      })}
    </List>
  );
};

const List = styled.ul`
  padding: 16px;
  width: 100%;
  height: 224px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  background-color: #fff;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px,
    rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
`;

const ListItem = styled.li`
  height: 40px;
  margin: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:first-child {
    margin-top: 8px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #222222;
    font-size: 16px;
    font-weight: 600;

    &:last-child {
      margin-top: 4px;
      font-size: 12px;
      font-weight: 400;
    }
  }
`;

const Buttons = styled.div`
  width: 104px;
  display: flex;
  justify-content: space-around;

  button {
    &:disabled {
      cursor: not-allowed;
    }
  }

  img {
    width: 22px;
    height: 22px;
  }
`;

const GUEST_LIST = [
  {
    id: 'adult',
    type: '성인',
    condition: '',
  },
  {
    id: 'child',
    type: '어린이',
    condition: '2-12세',
  },
  {
    id: 'kid',
    type: '유아',
    condition: '2세 미만',
  },
];
