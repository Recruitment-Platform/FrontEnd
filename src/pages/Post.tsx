/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from 'styled-components';
import MainHeader from '@components/layout/MainHeader';
import { ReactComponent as ShareIcon } from '@assets/icons/share-icon.svg';
import { ReactComponent as LikeIcon } from '@assets/icons/like-icon.svg';

function Post() {
  return (
    <PostLayout>
      <MainHeader />
      <Container>
        <Main>
          <Header>
            <TitleBox>
              <div>
                <span>온라인</span>
                <h1>함께하는 프로그래밍 스터디 그룹을 만듭니다!</h1>
              </div>
              <p>2023.08.28</p>
            </TitleBox>
            <Tags>
              <button>JavaScript</button>
              <button>HTML</button>
              <button>CSS</button>
              <button>Front-end</button>
            </Tags>
          </Header>
          <Contents>
            <pre>
              저희는 함께 공부하고 서로 발전하는 프로그래밍 스터디 그룹을 찾고
              있습니다. <br />
              함께 공부하며 지식을 공유하고, 프로젝트를 개발하며 실력을 키우고자
              합니다. <br />
              같이 열심히 노력하고 성장하고 싶으신 분들을 모집합니다!
              <br />
              <br />
              스터디 주제: <br />
              언어: Python, JavaScript, Java 등 다양한 언어 <br />웹 개발, 검색,
              데이터 분석, 머신 러닝 등 다양한 분야 <br />
              <br />
              모임 일정: 서로 협력하고 오후 7시부터 9시까지 <br />
              온라인 진행으로 (Zoom, Discord 등을 활용) <br />
              <br />
              참여 조건: <br />
              어떤 종류의 프로그래머가 환영했습니다. 여러분도 중급자도 모두!{' '}
              <br />
              열정과 존재감을 기다립니다.
              <br />
              프로젝트 환경이 더 좋지 않다면, 없어도 괜찮아요.
            </pre>
          </Contents>
        </Main>
        <Aside>
          <ProfileBox>
            <div>
              <NicknameBox>
                <img src="/images/default-profile.jpg" />
                <p>XOOYEON</p>
              </NicknameBox>
              <IntroductionBox>
                <p>자기소개를 입력하는 영역입니다.</p>
                <p>https://github.com/</p>
              </IntroductionBox>
            </div>
            <Menu>
              <button>
                <ShareIcon />
                공유
              </button>
              <button>
                <LikeIcon />
                20
              </button>
              <button>채팅하기</button>
            </Menu>
          </ProfileBox>
        </Aside>
      </Container>
    </PostLayout>
  );
}

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;

  & > button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 84px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid #e6e6e6;
    background: #ffffff;
    color: #303030;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &:nth-child(3) {
      color: #ffffff;
      background: #2c68ff;
    }
  }

  & > svg {
    width: 16px;
    height: 16px;
  }

  @media screen and (max-width: 1100px) {
    flex-direction: column-reverse;
    gap: 7px;
    & > button:nth-child(1) {
      display: none;
    }
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 27px;
  gap: 23px;

  @media screen and (max-width: 768px) {
    align-items: center;
    gap: 17px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;

    & > span {
      width: 58px;
      height: 25px;
      border-radius: 20px;
      border: 1px solid #2966ff;
      background: #ffffff;
      color: #2966ff;
      /* text-align: right; */
      font-family: Noto Sans KR;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    & > h1 {
      color: #303030;
      font-family: Noto Sans KR;
      font-size: 2.2rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  & > p {
    color: #8a8a8a;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media screen and (max-width: 768px) {
    gap: 7px;
    & > div {
      flex-direction: column;
      align-items: center;

      & > span {
        width: 60px;
        height: 23px;
        font-size: 1.3rem;
      }

      & > h1 {
        font-size: 1.8rem;
      }
    }
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 1040px;
  margin: 0 auto;
  padding: 0px 60px;
  padding-top: 71px;
  gap: 28px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    width: 100%;
    padding-top: 50px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0 19px;
    padding-top: 50px;
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;
  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: #f0f0f0;
    padding: 4px 9px;
    color: #8a8a8a;
    text-align: center;
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Contents = styled.div`
  padding: 22px 0;
  /* background-color: aqua; */
  height: auto;
  & > pre {
    text-align: left;
    white-space: pre-wrap;

    width: 100%;
    height: auto;
    color: #313131;
    font-family: Noto Sans KR;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const PostLayout = styled.div`
  /* max-width: 1440px; */
  /* background-color: #d3d3d3; */
  margin: 0 auto;
`;

const Main = styled.main`
  width: 100%;
`;

const Aside = styled.aside`
  width: 320px;
  height: 100%;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 28px 26px 28px;
  /* width: 320px; */
  border-radius: 15px;
  border: 1px solid #e1e1e1;
  background: #fff;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  @media screen and (max-width: 1100px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
const NicknameBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
  padding-bottom: 14px;
  & > img {
    width: 30px;
    height: 30px;
    border-radius: 100px;
  }

  & > p {
    color: #303030;
    font-family: Noto Sans KR;
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media screen and (max-width: 1100px) {
    padding-bottom: 7px;
  }
`;
const IntroductionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  padding-bottom: 25px;
  & > p:nth-child(1) {
    color: #313131;
    font-family: Noto Sans KR;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
  }
  & > p:nth-child(2) {
    color: #acacac;
    font-family: Noto Sans KR;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
  }

  @media screen and (max-width: 1100px) {
    padding-bottom: 0px;
  }
`;
export default Post;
