/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import styled from 'styled-components';
import MainHeader from '@components/layout/MainHeader';
import { ReactComponent as ShareIcon } from '@assets/icons/share-icon.svg';
import { ReactComponent as LikeIcon } from '@assets/icons/like-icon.svg';
import { ReactComponent as ReplyIcon } from '@assets/icons/reply-icon.svg';

function Post() {
  const [replyState, setReplyState] = useState(new Array(5).fill(false)); // 임시로 제작

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
          <ProfileBox_Mobile>
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
          </ProfileBox_Mobile>
          <CommentSection>
            <h3>댓글(1)</h3>
            <input
              type="text"
              placeholder="이 모집에 대한 댓글을 남겨주세요."
            />
            {new Array(2).fill(0).map((_, index) => {
              return (
                <>
                  <Comment key={index}>
                    <Comment_Profile>
                      <img src="/images/default-profile.jpg" />
                      <div>
                        <p>XOOYEON</p>
                        <p>2023.09.20</p>
                      </div>
                    </Comment_Profile>
                    <p>댓글입니다.</p>
                    <button
                      onClick={() => {
                        const nReplyState = [...replyState];
                        nReplyState[index] = !replyState[index];
                        setReplyState(nReplyState);
                      }}
                    >
                      답글 남기기
                    </button>
                  </Comment>
                  {new Array(1).fill(0).map((_, index1) => {
                    return (
                      <ReplySection key={index1}>
                        <ReplyIcon />
                        <Reply>
                          <Comment_Profile>
                            <img src="/images/default-profile.jpg" />
                            <div>
                              <p>XOOYEON</p>
                              <p>2023.09.20</p>
                            </div>
                          </Comment_Profile>
                          <p>답글입니다.</p>
                          <button>답글 남기기</button>
                        </Reply>
                      </ReplySection>
                    );
                  })}
                  <ReplyInput $visible={replyState[index]}>
                    <ReplyIcon />
                    <input placeholder="답글을 남겨주세요" />
                  </ReplyInput>
                </>
              );
            })}
          </CommentSection>
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

const PostLayout = styled.div`
  /* max-width: 1440px; */
  /* background-color: #d3d3d3; */
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 1150px; */
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

const Main = styled.main`
  width: 100%;
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

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    white-space: nowrap;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Contents = styled.div`
  padding: 22px 0;
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 22px 17px;

    & > pre {
      font-size: 1.3rem;
    }
  }
`;

const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-top: 1px solid #e1e1e1;

  & > h3 {
    align-self: flex-start;
    color: #303030;
    font-family: Noto Sans KR;
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
    padding: 11px 0 11px 8px;
  }

  input {
    width: 100%;
    border-radius: 15px;
    border: 1px solid #e1e1e1;
    background: #ffffff;
    padding: 14px 20px;
    color: #000000;
    font-family: Noto Sans KR;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::placeholder {
      color: #a9a9a9;
    }
    &::-moz-placeholder {
      color: #a9a9a9;
    }
    &::-webkit-input-placeholder {
      color: #a9a9a9;
    }
  }

  @media screen and (max-width: 768px) {
    & > h3 {
      font-size: 1.4rem;
      padding: 13px 0 13px 8px;
    }

    input {
      font-size: 1.3rem;
      padding: 11px 16px;
    }
  }
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 8px;
  border-bottom: 1px solid #e1e1e1;
  width: 100%;

  // 댓글 내용
  & > p {
    color: #313131;
    font-family: Noto Sans KR;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
    padding: 10px 0 20px 0;
  }

  // 답글 남기기
  & > button {
    width: 63px;
    background: none;
    color: #a9a9a9;
    font-family: Noto Sans KR;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    padding: 13px 6px;

    & > p {
      font-size: 1.6rem;
      padding: 8px 0 12px 0;
    }
  }
`;

const Comment_Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;

  // 프로필 이미지
  & > img {
    width: 50px;
    height: 50px;
    border-radius: 100px;
  }
  // 이름, 날짜
  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    // 이름
    & > p:first-child {
      color: #222222;
      font-family: Noto Sans KR;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    // 날짜
    & > p:last-child {
      color: #a9a9a9;
      font-family: Noto Sans KR;
      font-size: 1.3rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  @media screen and (max-width: 768px) {
    gap: 9px;

    & > img {
      width: 40px;
      height: 40px;
    }

    & > div {
      & > p:first-child {
        font-size: 1.3rem;
      }
      & > p:last-child {
        font-size: 1.1rem;
      }
    }
  }
`;

const ReplySection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: 30px;
  border-bottom: 1px solid #e1e1e1;

  & > svg {
    margin-top: 15px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 20px;
  }
`;

const Reply = styled(Comment)`
  border-bottom: none;
`;

const ReplyInput = styled.div<{ $visible: boolean }>`
  display: ${(props) => (props.$visible ? 'flex' : 'none')};
  flex-direction: row;
  width: 100%;
  gap: 10px;
  padding-left: 30px;
  padding: 15px 0px 15px 30px;
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
  margin-bottom: 17px;
  /* flex-wrap: wrap; */

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  @media screen and (max-width: 1100px) {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

// 모바일 버전일 경우에 프로필 visible 상태
const ProfileBox_Mobile = styled(ProfileBox)`
  display: none;

  @media screen and (max-width: 1100px) {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    margin-left: 17px;
    margin-right: 17px;
    padding: 14px 29px;
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
    word-break: break-all;
  }

  @media screen and (max-width: 1100px) {
    padding-bottom: 7px;
  }

  @media screen and (max-width: 768px) {
    & > img {
      width: 21px;
      height: 21px;
    }

    & > p {
      font-size: 1.1rem;
    }
  }
`;

const IntroductionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  padding-bottom: 25px;

  // 자기소개
  & > p:nth-child(1) {
    color: #313131;
    font-family: Noto Sans KR;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
  }
  // 깃허브 주소
  & > p:nth-child(2) {
    color: #acacac;
    font-family: Noto Sans KR;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    text-align: left;
    word-break: break-all;
    padding-bottom: 5px;
  }

  @media screen and (max-width: 1100px) {
    padding-bottom: 0px;
  }

  @media screen and (max-width: 768px) {
    gap: 3px;

    & > p:nth-child(1) {
      font-size: 1rem;
    }
    & > p:nth-child(2) {
      font-size: 1rem;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  padding-left: 10px;

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

  svg {
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

  @media screen and (max-width: 768px) {
    & > button {
      width: 60px;
      height: 25px;
      font-size: 1rem;

      &:nth-child(3) {
        color: #ffffff;
        background: #2c68ff;
      }
    }

    svg {
      width: 12px;
      height: 10px;
    }
  }
`;

export default Post;
