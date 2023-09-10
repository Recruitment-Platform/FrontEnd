import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import SearchBar from '@components/layout/SearchBar';
import RecommendTag from './recommendTag';

function MainHeader() {
  const recommendtags = [
    'JavaScript',
    'HTML',
    'CSS',
    'Front-end',
    'Adobe Photoshop',
  ];
  return (
    <>
      <MainHeaderContainer>
        <Nav />
        <SearchBar />
        <Tags>
          {recommendtags.map((tag) => {
            return <RecommendTag key={tag} name={tag} />;
          })}
        </Tags>
      </MainHeaderContainer>
    </>
  );
}

export default MainHeader;

const MainHeaderContainer = styled.header`
  background: rgba(41, 102, 255, 0.1);
  width: 100%;
  max-width: 1440px;
  height: 250px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;
