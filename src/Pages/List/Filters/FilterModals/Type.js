import React, { Component } from 'react';
import styled from 'styled-components';
import BottomButtons from './BottomButtons';

const SPACE_TYPE = [
  ['집 전체', '집 전체를 단독으로 사용합니다'],
  [
    '개인실',
    '침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께 이용할 수도 있습니다.',
  ],
  ['호텔 객실', '부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다'],
  [
    '다인실',
    '사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께 이용합니다',
  ],
];
class Type extends Component {
  render() {
    return (
      <div>
        <TypeWrapper>
          <UpperContentWrapper>
            <UpperContent>
              <UnorderList>
                {SPACE_TYPE.map((type, idx) => {
                  return (
                    <>
                      <MappingOption>
                        <CheckBox type="checkbox" key={idx + 1} />
                        <List>
                          <p style={{ fontSize: '16px' }}>{type[0]}</p>
                          <p style={{ fontSize: '14px' }}>{type[1]}</p>
                        </List>
                      </MappingOption>
                    </>
                  );
                })}
              </UnorderList>
            </UpperContent>
          </UpperContentWrapper>
          <BottomButtons />
        </TypeWrapper>
      </div>
    );
  }
}

export default Type;

const TypeWrapper = styled.div`
  position: absolute;
  width: 360px;
  height: 429px;
  background-color: white;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  z-index: 10;
  left: 150px;
`;

const UpperContentWrapper = styled.div`
  height: 364px;
  border-bottom: 1px solid rgb(200, 200, 200);
`;

const UpperContent = styled.div`
  padding: 20px;
  height: 100%;
`;

const UnorderList = styled.ul`
  height: 100%;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
`;

const MappingOption = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.input`
  transform: scale(2);
  margin-right: 20px;
`;

const List = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;
