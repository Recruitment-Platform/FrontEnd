import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BackToChatList } from '@assets/icons/back-icon.svg';
interface ChatViewProps {
  isChatView: boolean;
  roomId: number;
  profile?: string;
  nickName: string;
}

const MESSAGE = [
  {
    isSender: true,
    isprevSender: false,
    isLastMessage: false,
    messages:
      '안녕하세요! 디자인 스터디그룹건으로 연락드립니다. 오프라인 진행하시는 걸로 알고있는데 맞을까요?',
  },
  {
    isSender: false,
    isprevSender: false,
    isLastMessage: false,
    messages:
      '안녕하세요 반갑습니다! 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트',
  },
  {
    isSender: true,
    isprevSender: false,
    isLastMessage: false,
    messages: '텍스트텍스트텍스트',
  },
  {
    isSender: true,
    isprevSender: true,
    isLastMessage: false,
    messages: '텍스트텍스트텍스트',
  },
  {
    isSender: true,
    isprevSender: true,
    isLastMessage: false,
    messages:
      '텍스트텍스트텍스트 텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
  },
  {
    isSender: true,
    isprevSender: true,
    isLastMessage: false,
    messages: '텍스트텍스트텍스트',
  },
  {
    isSender: false,
    isprevSender: false,
    isLastMessage: true,
    messages: '텍스트텍스트텍스트',
  },
];
function ChatMessage({ isChatView, profile, nickName }: ChatViewProps) {

  function ChatViewHandler() {
    //...
  }
  return (
    <>
      {isChatView && (
        <ChatViewLayout>
          <ChatTitle>
            <BackToChatList onClick={ChatViewHandler} />
            <p>{nickName}</p>
          </ChatTitle>
          <MessageList>
            {MESSAGE.map((key: any) => {
              return (
                <div>
                  {key.isSender === true ? (
                    <SenderMessage>
                      <Image>
                        {!key.isprevSender && <img src={profile} />}
                      </Image>
                      <div>
                        {!key.isprevSender && <p>{nickName}</p>}
                        <div>
                          <p>{key.messages}</p>
                        </div>
                      </div>
                    </SenderMessage>
                  ) : (
                    <MyMessage>
                      <div>
                        <p>{key.messages}</p>
                      </div>
                    </MyMessage>
                  )}
                </div>
              );
            })}
          </MessageList>
          <MessageInputLayout>
            <input type="text" placeholder="텍스트" />
            <button>
              <p>전송</p>
            </button>
          </MessageInputLayout>
        </ChatViewLayout>
      )}
    </>
  );
}
export default ChatMessage;

const SenderMessage = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  div {
    & > p {
      font-family: Noto Sans KR;
      font-size: 10px;
      font-weight: 500;
      line-height: 14px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(48, 48, 48, 1);
    }
    & > div {
      padding: 5px 10px;
      max-width: 200px;
      margin-bottom: 10px;
      border: 0.5px solid rgba(225, 225, 225, 1);
      width: auto;
      height: auto;
      border-radius: 10px;
      & > p {
        display: inlin-flex;
        margin: 0px;
        text-align: left;
        color: rgba(48, 48, 48, 1);
        font-family: Noto Sans KR;
        font-size: 10px;
        font-weight: 400;
        line-height: 13px;
      }
    }
  }
`;
const Image = styled.div`
  margin: 0px 10px;
  border-radius: 15px;
  width: 40px;
  height: 40px;
`;

const MyMessage = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  div {
    margin-bottom: 10px;
    margin-right: 15px;
    border: 0.5px solid rgba(225, 225, 225, 1);
    width: auto;
    max-width: 220px;
    height: auto;
    border-radius: 10px;
    padding: 5px 10px;
    p {
      margin: 0px;
      display: inlin-flex;
      text-align: left;
      color: rgba(48, 48, 48, 1);
      font-family: Noto Sans KR;
      font-size: 10px;
      font-weight: 400;
      line-height: 13px;
    }
  }
`;
const ChatViewLayout = styled.div`
  position: fixed;
  /* margin-bottom: 35px;*/
  bottom: 19%;
  right: 4%;
  z-index: 800;
  width: 300px;
  height: 393px;
  border-radius: 15px;
  border: 1px solid #e1e1e1;
  background: #ffffff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
`;

const ChatTitle = styled.div`
  display: flex;
  align-items: center;
  top: 377px;
  left: 88px;
  padding-left: 20px;
  margin: 15px 0px;
  p {
    padding-left: 10px;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const MessageList = styled.div`
  width: 300px;
  height: 300px;
  overflow: scroll;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
    height: 20px;
  }
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(217, 217, 217, 1);
    border-radius: 15px;
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const MessageInputLayout = styled.div`
  display: flex;
  align-items: center;
  input {
    padding: 10px;
    margin-left: 10px;
    width: 220px;
    height: 30px;
    background-color: rgba(249, 249, 249, 2);
    border-radius: 15px;
  }
  button {
    margin-left: 10px;
    width: 45px;
    height: 30px;
    top: 455px;
    border-radius: 15px;
    background: rgba(41, 102, 255, 1);
    p {
      font-family: Noto Sans KR;
      font-size: 11px;
      font-weight: 700;
      line-height: 13px;
      letter-spacing: 0em;
      text-align: center;
      color: rgba(255, 255, 255, 1);
    }
  }
`;
