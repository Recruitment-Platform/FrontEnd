import React, { useState } from 'react';
import styled from 'styled-components';
import ChatMessage from './ChatMessage';

interface ChatCardProps {
  setIsEnter : React.Dispatch<React.SetStateAction<boolean>>;
  key: number;
  profile?: string;
  nickName: string;
  content: string;
  sentTime: string;
  unreadCount: number;
}

function ChatCard({
  setIsEnter,
  key,
  profile,
  nickName,
  content,
  sentTime,
  unreadCount,
}: ChatCardProps) {
  const [isChatView, setChatView] = useState(false);
  function ChatHandler() {
    setChatView(true);
    setIsEnter(true);
  }
  return (
    <>
        <ChatContentContainer onClick = { ChatHandler} >
        <Profile src={profile} />
        <SenderAndContent>
          <Sender>{nickName}</Sender>
          <Content>{content} </Content>
        </SenderAndContent>
        <TimeAndUnread>
          <SentTime>{sentTime}</SentTime>
          <Count>
            <p>{unreadCount}</p>
          </Count>
        </TimeAndUnread>
      </ChatContentContainer>
      <ChatMessage
      setChatView ={setChatView}
          isChatView={isChatView}
          profile={profile}
          nickName={nickName}
          roomId={key}
        />
    </>
  );
}

export default ChatCard;

const ChatContentContainer = styled.div`
  background: rgba(255, 255, 255, 1);
  width: 260px;
  height: 70px;
  margin: 0px 0px;
  margin-left: 15px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  &:hover {
    background: rgba(249, 249, 249, 1);
  }
`;
const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  background: #eeeeee;
  display: flex;
  border: none;
`;
const SenderAndContent = styled.div`
  width: 147px;
  height: 65px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Sender = styled.span`
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`;
const Content = styled.p`
  width: 147px;
  height: 27px;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-family: Noto Sans KR;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(138, 138, 138, 1);
`;
const TimeAndUnread = styled.li`
  padding: 5px 0px;
  display: flex;
  align-items: end;
  flex-direction: column;
`;
const SentTime = styled.span`
  font-family: Noto Sans KR;
  font-size: 9px;
  font-weight: 400;
  line-height: 11px;
  letter-spacing: 0em;
  text-align: right;
  color: rgba(192, 192, 192, 1);
`;
const Count = styled.div`
  margin-top: 5px;
  padding-left: 10px;
  p {
    padding: 2px 5px;
    border-radius: 15px;
    background: rgba(41, 102, 255, 1);
    color: rgba(255, 255, 255, 1);
    font-family: Inter;
    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0em;
    font-family: Noto Sans KR;
  }
`;
