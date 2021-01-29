import React from 'react';
import styled from 'styled-components';

const ProfileBox = () => {
  return (
    <List>
      <ListItem>로그인</ListItem>
      <ListItem>회원가입</ListItem>
    </List>
  );
};

export default ProfileBox;

const List = styled.ul`
  width: 240px;
  height: 100px;
  background-color: #fff;
  border-radius: 21px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;

const ListItem = styled.li`
  height: 50px;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    background-color: #f6f4f4;
    border-radius: 21px;
    font-weight: 600;
  }
`;
