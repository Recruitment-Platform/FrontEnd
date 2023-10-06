import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import StudyCard from '@components/studyCard';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as NewPostIcon } from '@assets/icons/newpost-icon.svg';
import { ReactComponent as ChatIcon } from '@assets/icons/chat-icon.svg';
import { ReactComponent as UnreadCountIcon } from '@assets/icons/chat-new-icon.svg';
import MainHeader from '@components/layout/MainHeader';
import SearchBar from '@components/layout/SearchBar';
import ChatList from '@components/layout/ChatList';
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

function Home() {
  const navigate = useNavigate();
  const [isChatVisible, setChatVisible] = useState(false);
  function clickNewpost() {
    navigate(`/`); //임시로 page 경로 설정
  }
  function toggleChatHandler() {
    setChatVisible(!isChatVisible);
  }

  return (
    <>
      <MainHeaderContainer>
        <MainHeader backgroundColor="#f2f4ff" shadow={false} />
        <SearchBar />
      </MainHeaderContainer>
      <Main>
        <MainContentContainer>
          <PostList>
            <Title>
              <p>🔥지금 가장 핫한 스터디 그룹을 만나보세요!</p>
            </Title>
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
          {isChatVisible && <ChatList />}
          <Icon>
            <NewPostIcon onClick={clickNewpost} />
            <Chat>
              <UnreadCount>
                <UnreadCountIcon />
              </UnreadCount>
              <ChatIcon onClick={toggleChatHandler} />
            </Chat>
          </Icon>
        </MainContentContainer>
      </Main>
    </>
  );
}
export default Home;

const UnreadCount = styled.div`
  right: 5px;
  position: absolute;
  top: -5px;
`;
const Main = styled.div``;

const Chat = styled.div`
  top: 70px;
  position: absolute;
`;

const MainHeaderContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: rgba(242, 244, 255, 1);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Icon = styled.li`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  bottom: 20%;
  right: 5%;
`;

const PostList = styled.div`
  gap: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1440px;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0 20px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    padding-top: 19px;
  }
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  p {
    margin-left: 0;
    margin-top: 40px;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
  }
  @media screen and (min-width: 1084px) {
    display: flex;
    padding-right: 680px;
    justify-content: center;
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
