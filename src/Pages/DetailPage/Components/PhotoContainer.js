import React from 'react';
import styled from 'styled-components';

const PhotoContainer = ({ data }) => {
  const { space_image } = data;

  return (
    <Wrapper>
      <LeftSide>
        <img alt={data.title} src={space_image && space_image[0]} />
      </LeftSide>
      <RightSide>
        <ImgContainer>
          <img alt={data.title} src={space_image && space_image[1]} />
          <img alt={data.title} src={space_image && space_image[2]} />
        </ImgContainer>
        <ImgContainer>
          <img alt={data.title} src={space_image && space_image[3]} />
          <img alt={data.title} src={space_image && space_image[4]} />
        </ImgContainer>
      </RightSide>
    </Wrapper>
  );
};

export default PhotoContainer;

const Wrapper = styled.div`
  margin-bottom: 48px;
  width: 100%;
  height: 300px;
  display: flex;

  img {
    &:hover {
      cursor: pointer;
      filter: brightness(80%);
      transition: all 0.5s ease;
    }
  }
`;

const LeftSide = styled.div`
  margin-right: 8px;
  width: 50%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 22px;
    border-bottom-left-radius: 22px;
  }
`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ImgContainer = styled.div`
  padding-bottom: 8px;
  width: 100%;
  height: 50%;
  display: flex;

  &:first-child {
    img {
      &:last-child {
        border-top-right-radius: 22px;
      }
    }
  }

  &:last-child {
    padding-bottom: 0;
    img {
      &:last-child {
        border-bottom-right-radius: 22px;
      }
    }
  }

  img {
    padding-right: 8px;
    display: block;
    width: 50%;
    height: 100%;

    &:last-child {
      padding-right: 0;
    }
  }
`;
