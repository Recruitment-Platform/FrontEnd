import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import SearchBar from '@components/layout/SearchBar';
function MainHeader() {
  return (
    <>
      <MainHeaderContainer>
        <Nav />
        <SearchBar />
      </MainHeaderContainer>
    </>
  );
}

export default MainHeader;

const MainHeaderContainer = styled.header`
  background: rgba(242, 244, 255, 1);
  width: 100%;
  max-width: 1440px;
  height: 250px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;
