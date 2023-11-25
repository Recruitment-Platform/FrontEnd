import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BackToChatList } from '@assets/icons/back-icon.svg';
interface ChatViewProps {
  setChatView : React.Dispatch<React.SetStateAction<boolean>>;
  isChatView: boolean;
  roomId: number;
  profile?: string;
  nickName: string;
}

function ChatMessage({ setChatView, isChatView, profile, nickName }: ChatViewProps) {
  const [messages, SetMessages] = useState([
    {
      id : 1,
      name: nickName,
      message : '안녕하세요! 디자인 스터디그룹건으로 연락드립니다. 오프라인 진행하시는 걸로 알고있는데 맞을까요?',
    }, 
    {
      id : 2,
      name : nickName,
      message :  '안녕하세요 반갑습니다! 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트',
    },
    {
      id : 3,
      name : 'me',
      message :  '안녕하세요 반갑습니다! 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트',
    },
    {
      id : 4,
      name : nickName,
      message :  '안녕하세요 반갑습니다! 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트',
    },
    {
      id : 5,
      name : nickName,
      message :  '안녕하세요 반갑습니다! 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트',
    },
    {
      id : 6,
      name : nickName,
      message :  '안녕하세요 반갑습니다! 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트',
    },
    {
      id : 7,
      name : nickName,
      message :  '안녕하세요 반갑습니다! 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트',
    },
  ]);
  const ChatViewHandler= () => {
      setChatView(false)
  }
  return (
    <>
      {isChatView && (
        <ChatViewLayout>
          <ChatTitle>
            <BackToChatList onClick = {
              ChatViewHandler}/>
            <p>{nickName}</p>
          </ChatTitle>
          <MessageList>
            {messages.map((message, index) => {
              return (
                <div>
                    {message.name === '닉네임' ? (
                    <SenderMessage>
                      <Image>
                        {index === 0 && <img src={profile} /> }
                        {index > 0 && messages[index-1].name !== message.name &&  <img src={profile} /> }
                      </Image>
                      <div>
                        {index === 0 && <p>{nickName}</p>}
                        { index > 0 && messages[index -1].name !== message.name &&  <p>{nickName}</p>}
                        <div>
                            <p>{message.message}</p>
                        </div>
                      </div>
                    </SenderMessage>) :
                    (
                    <MyMessage>
                      <div>
                            <p>{message.message}</p>
                      </div>
                    </MyMessage>
                    )
                  }
                </div>
              );
            })}
          </MessageList>
          <MessageInputLayout>
            <input type="text" placeholder="텍스트 입력" />
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
      margin: 2px 0px;
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
  margin: 2px 10px;
  border-radius: 15px;
  border: none;
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
    background: #F9F9F9;
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
  display: flex;
  flex-direction: column-reverse;
  overflow: scroll;
  overflow-y: auto;
  overflow-x: hidden;
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
