import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import StudyCard from '@components/studyCard';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as NewPostIcon } from '@assets/icons/newpost-icon.svg';
import { ReactComponent as ChatIcon } from '@assets/icons/chat-icon.svg';
import { ReactComponent as ChatNewIcon } from '@assets/icons/chat-new-icon.svg';
import MainHeader from '@components/layout/MainHeader';
import SearchBar from '@components/layout/SearchBar';

/*임시로 설정한 데이터 */
const DUMMYDATA = [
  {
    id: '1',
    date: '2023.09.27',
    mode: '온라인',
    title: '함께하는 프로그래밍 스터디 그룹을 만듭니다!',
    content:
      '저희는 함께 공부하고 서로 발전하는 프로그래밍 스터디 그룹을 찾고있습니다. 함께 공부하며 지식을 공유하고, 프로젝트를 개발하며 실력을 키우고자 합니다. 같이 열심히 노력하고 성장하고 싶으신 분들을 모집합니다!',
    tags: ['JavaScript', 'HTML', 'CSS', 'Front-end'],
  },
  {
    id: '2',
    date: '2023.09.28',
    mode: '오프라인',
    title: '디자인 스터디 그룹을 함께 만들어요!',
    content:
      '함께 창의적인 아이디어를 공유하고, 기술을 향상시키며, 서로 영감을 주고 받으며 더 나은 디자이너로 성장하고 싶습니다. 함께 멋진 디자인 세계를 탐험해보시죠!',
    tags: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe XD'],
  },
];

function MainContent() {
  const navigate = useNavigate();
  function clickNewpost() {
    navigate(`/`); //임시로 page 경로 설정
  }

  return (
    <>
      <MainHeaderContainer>
        <MainHeader backgroundColor="#f2f4ff" shadow={false} />
        <SearchBar />
      </MainHeaderContainer>
      <MainContentContainer>
        <Title>
          <p>🔥지금 가장 핫한 스터디 그룹을 만나보세요!</p>
        </Title>
        <PostList>
          {DUMMYDATA.map((post: any) => {
            return (
              <StudyCard
                key={post.key}
                date={post.date}
                mode={post.mode}
                title={post.title}
                content={post.content}
                tags={post.tags}
              />
            );
          })}
        </PostList>
        <More>+ 더보기</More>
        <Icon>
          <NewPostIcon onClick={clickNewpost} />
          <ChatIcon />
          <Chat>
            <ChatNewIcon />
          </Chat>
        </Icon>
      </MainContentContainer>
    </>
  );
}
export default MainContent;

const Chat = styled.div`
  right: 0;
  top: 70px;
  position: absolute;
`;

const MainHeaderContainer = styled.div`
  max-width: 1440px;
  height: 250px;
  background-color: rgba(242, 244, 255, 1);
`;
const Icon = styled.li`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  top: 70%;
  left: 93%;
  @media screen and (max-width: 768px) {
    left: 86%;
  }
`;

const PostList = styled.div`
  grid-gap: 27px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MainContentContainer = styled.div`
  max-width: 1440px;
  max-height: 774px;
  margin : 30px 50px;
  padding:; 0 20px;
  @media screen and (max-width: 768px) {
    padding-top: 19px;
    margin: 10px 10px;

  }
`;

const Title = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  p {
    margin-left: 0;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
  }
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    p {
      font-family: Noto Sans KR;
      font-size: 16px;
      font-weight: 700;
      line-height: 23px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;

const More = styled.button`
  margin: 40px;
  background-color: transparent;
  color: rgba(138, 138, 138, 1);
  font-family: Noto Sans KR;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;

  &:hover {
    font-size: 16px;
  }
`;
