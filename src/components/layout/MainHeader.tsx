import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

interface MainHeaderProps {
  backgroundColor?: string; // 헤더 배경화면 색
  shadow?: boolean; // 헤더 그림자 여부
  logo?: boolean;
}

function MainHeader({
  backgroundColor = '#ffffff',
  shadow = true,
  logo = true,
}: MainHeaderProps) {
  return (
    <>
      <MainHeaderContainer $backgroundColor={backgroundColor} $shadow={shadow}>
        <HeaderBox $logo={logo}>
          <Nav logo={logo} />
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
  background: ${(props) => props.$backgroundColor};
  margin: 0 auto;
  box-shadow: ${(props) =>
    props.$shadow ? '0px 0px 20px 0px rgba(0, 0, 0, 0.05)' : 'none'};

  @media screen and (max-width: 768px) {
    box-shadow: none;
  }
`;

const HeaderBox = styled.div<{
  $logo: boolean;
}>`
  width: 100%;
  height: 115px;
  max-width: 1440px;

  @media screen and (max-width: 768px) {
    height: ${(props) => (props.$logo ? '145px' : '71px')};
  }
`;

export default MainHeader;
