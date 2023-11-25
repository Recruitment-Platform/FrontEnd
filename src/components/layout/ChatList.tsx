import React ,{useState } from 'react';
import styled from 'styled-components';
import ChatCard from './ChatCard';
const ChatItem = [
  {
    profile: '/images/default-profile.jpg',
    sender: '뉴비 디자이너',
    content:
      '안녕하세요! 디자인 스터디그룹건으로 연락드립니다. 오프라인 진행하시는 걸로 알고있는데 맞을까요?',
    sentTime: '오전 09:28',
    unreadCount: 1,
  },
  {
    profile:  '/images/default-profile.jpg',
    sender: '닉네임',
    content:
      '안녕하세요! 디자인 스터디그룹건으로 연락드립니다. 오프라인 진행...',
    sentTime: '오전 10:35',
    unreadCount: 2000,
  },
  {
    profile: ' /images/default-profile.jpg',
    sender: '닉네임',
    content:
      '안녕하세요! 디자인 스터디그룹건으로 연락드립니다. 오프라인 진행...',
    sentTime: '오전 10:27',
    unreadCount: 30,
  },
  {
    profile: '/images/default-profile.jpg',
    sender: '닉네임',
    content:
      '안녕하세요! 디자인 스터디그룹건으로 연락드립니다. 오프라인 진행...',
    sentTime: '오전 10:27',
    unreadCount: 30,
  },
  {
    profile: '/images/default-profile.jpg',
    sender: '닉네임',
    content:
      '안녕하세요! 디자인 스터디그룹건으로 연락드립니다. 오프라인 진행...',
    sentTime: '오전 10:27',
    unreadCount: 30,
  },
  {
    profile:  '/images/default-profile.jpg',
    sender: '닉네임',
    content:
      '안녕하세요! 디자인 스터디그룹건으로 연락드립니다. 오프라인 진행...',
    sentTime: '오전 10:27',
    unreadCount: 30,
  },
];

function ChatList() {
  const [isEnter, setIsEnter] = useState(false);
  return (
    <ChatCardLayout>
      <ChatTitle>
        <p>채팅목록</p>
      </ChatTitle>      
      <ChatContainer isEnter = {isEnter}>
        {ChatItem.map((item: any) => (
          <ChatCard
            setIsEnter = {setIsEnter}
            key={item.key}
            profile={item.profile}
            nickName={item.sender}
            content={item.content}
            sentTime={item.sentTime}
            unreadCount={item.unreadCount}
          />
        ))}
      </ChatContainer>
    </ChatCardLayout>
  );
}

export default ChatList;

const ChatCardLayout = styled.div`
  position: fixed;
  display: 'flex';
  /* margin-bottom: 35px;*/
  bottom: 19%;
  right: 4%;
  z-index: 400;
  width: 300px;
  height: 393px;
  border-radius: 15px;
  border: 1px solid #e1e1e1;
  background: #ffffff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
`;

const ChatTitle = styled.div`
  top: 377px;
  left: 88px;
  padding-left: 20px;
  margin: 15px 0px;
  p {
    font-family: Noto Sans KR;
    font-size: 12px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const ChatContainer = styled.div<{isEnter: boolean}>`
  display: flex;
  height: 320px;
  width: 300px;
  padding-right: 10px;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px;
    height: auto;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(217, 217, 217, 1);
    border-radius: 15px;
    width: 5px;
    display : ${props => props.isEnter ?  'none' : 'flex'}
  }
`;
