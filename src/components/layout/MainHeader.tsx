import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

interface MainHeaderProps {
  backgroundColor?: string; // 헤더 배경화면 색
  shadow?: boolean; // 헤더 그림자 여부
}

function MainHeader({
  backgroundColor = '#ffffff',
  shadow = true,
}: MainHeaderProps) {
  return (
    <>
      <MainHeaderContainer $backgroundColor={backgroundColor} $shadow={shadow}>
        <HeaderBox>
          <Nav />
        </HeaderBox>
      </MainHeaderContainer>
    </>
  );
}

const MainHeaderContainer = styled.header<{
  $backgroundColor: string;
  $shadow: boolean;
}>`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100%;
  height: auto;
  /* background: rgba(242, 244, 255, 1); */
  background: ${(props) => props.$backgroundColor};
  margin: 0 auto;
  box-shadow: ${(props) =>
    props.$shadow ? '0px 0px 20px 0px rgba(0, 0, 0, 0.05)' : 'none'};

  @media screen and (max-width: 768px) {
    box-shadow: none;
  }
`;

const HeaderBox = styled.div`
  width: 100%;
  height: 115px;
  max-width: 1440px;

  @media screen and (max-width: 768px) {
    height: 137px;
  }
`;

export default MainHeader;
