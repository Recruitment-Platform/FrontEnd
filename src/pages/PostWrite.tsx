import React, { useState } from 'react';
import styled from 'styled-components';
import MainHeader from '@components/layout/MainHeader';
import { ReactComponent as ViewOptions } from '@assets/icons/view-options.svg';
import { ReactComponent as CloseOptions } from '@assets/icons/close-options.svg';
import { ReactComponent as UnreadCountIcon } from '@assets/icons/chat-new-icon.svg';
import { ReactComponent as ChatIcon } from '@assets/icons/chat-icon.svg';
import ReactQuill from 'react-quill';
import ChatList from '@components/layout/ChatList';

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
    ],
  },
};

function PostWrite() {
  const [type, setType] = useState('스터디');
  const [mode, setMode] = useState('온라인');
  const [isChatVisible, setChatVisible] = useState(false);
  const [viewTypeOptions, setViewTypeOptions] = useState(false);
  const [viewModeOptions, setViewModeOptions] = useState(false);
  function TypeOptionsHandler() {
    setViewTypeOptions(!viewTypeOptions);
  }
  function ModeOptionsHandler() {
    setViewModeOptions(!viewModeOptions);
  }
  function toggleChatHandler() {
    setChatVisible(!isChatVisible);
  }

  return (
    <PostWriteLayout>
      <MainHeader />
      <PostContent>
        <PostForm>
          <SelectBox>
            <SelectItem>
              <div>
                <div>
                  <p>{type}</p>
                </div>
                {!viewTypeOptions ? (
                  <ViewOptions onClick={TypeOptionsHandler} />
                ) : (
                  <CloseOptions />
                )}
              </div>
              {viewTypeOptions && (
                <ul>
                  <li>스터디</li>
                  <li>프로젝트</li>
                </ul>
              )}
            </SelectItem>
            <SelectItem>
              <div>
                <div>
                  <p>{mode}</p>
                </div>
                {!viewModeOptions ? (
                  <ViewOptions onClick={ModeOptionsHandler} />
                ) : (
                  <CloseOptions />
                )}
              </div>
              {viewModeOptions && (
                <ul>
                  <li>온라인</li>
                  <li>오프라인</li>
                </ul>
              )}
            </SelectItem>
          </SelectBox>
          <TitleBox>
            <label htmlFor="title">제목</label>
            <input
              id="title"
              type="text"
              name="title"
              required
              placeholder="글 제목을 입력해주세요"
            />
          </TitleBox>
          <ContentBox>
            <ReactQuill
              style={{ width: '100%', height: '644px' }}
              modules={modules}
            />
          </ContentBox>
        </PostForm>
        {isChatVisible && <ChatList />}
        <Icon>
          <ChatBox>
            <UnreadCount>
              <UnreadCountIcon />
            </UnreadCount>
            <ChatIcon onClick={toggleChatHandler} />
          </ChatBox>
        </Icon>
      </PostContent>
    </PostWriteLayout>
  );
}
export default PostWrite;

const PostWriteLayout = styled.div`
  margin: 0 auto;
`;

const PostForm = styled.form`
  max-width: 1040px;
  width: 100%;
`;

const PostContent = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  margin: 0px auto;
  padding: 0px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SelectBox = styled.div`
  display: flex;
  max-width: 1040px;
  flex-direction: row;
  gap: 40px;
  margin-top: 40px;
`;

const SelectItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: auto;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  & > div {
    border: 1px solid rgba(225, 225, 225, 1);
    border-radius: 10px;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    & > div {
      width: 87%;
      & > p {
        padding-left: 20px;
      }
    }
  }
  & > ul {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 100%;
    height: auto;
    border: 1px solid rgba(225, 225, 225, 1);
    border-radius: 10px;
    background: rgba(255, 255, 255, 1);
    & > li {
      display: flex;
      width: 100%;
      height: 45px;
      text-align: center;
      align-items: center;
      justify-content: flex-start;
      padding-left: 20px;
      &: hover {
        background: rgba(41, 102, 255, 1);
        color: white;
      }
    }
    & > li:nth-child(1) {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    &>li: nth-child(2) {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin: 20px 0px;
  gap: 10px;
  & > label {
    font-family: Noto Sans KR;
    font-size: 16px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
  }
  & > input {
    padding: 0px 20px;
    max-width: 1038px;
    width: 100%;
    height: 50px;
    border: 1px solid rgba(225, 225, 225, 1);
    border-radius: 10px;
    font-family: Noto Sans KR;
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    & ::placeholder {
      color: rgba(169, 169, 169, 1);
    }
  }
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: flex-start;
  & > ql-container {
    border: 1px soild rgba(225, 225, 225, 1);
    border-raius: 10px;
  }
  & > div:nth-child(1) {
    & > div:nth-child(1) {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      display: flex;
    }
    & > div:nth-child(2) {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`;

const Icon = styled.li`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  bottom: 20%;
  right: 4%;
`;

const UnreadCount = styled.div`
  right: 5px;
  position: absolute;
  top: -5px;
`;

const ChatBox = styled.div`
  top: 30px;
  right: 1%;
  position: absolute;
`;
