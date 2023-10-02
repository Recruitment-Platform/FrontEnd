import React from 'react';
import { styled } from 'styled-components';
import TechTag from './techTag';

interface StudyCardProps {
  date: string; // 날짜
  mode: string; // 온라인 유무
  title: string; // 스터디/프로젝트 이름
  content: string; // 스터디/프로젝트 설명
  tags: string[]; // 태그
}

function StudyCard({ date, mode, title, content, tags }: StudyCardProps) {
  return (
    <StudyCardLayout>
      <DateAndMode>
        <Date>{date}</Date>
        <Mode>{mode}</Mode>
      </DateAndMode>
      <Contents>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </Contents>
      <Tags>
        {tags.map((tag) => {
          return <TechTag key={tag} name={tag} />;
        })}
      </Tags>
    </StudyCardLayout>
  );
}

const StudyCardLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px; /*추가한 코드*/
  align-items: flex-start;
  width: 500px;
  /* height: 280px; */
  border-radius: 15px;
  border: 1px solid #e1e1e1;
  background: #ffffff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
  padding: 35px;
  @media screen and (max-width: 768px) {
    width: 340px;
  }
  @media screen and (max-width: 390px) {
    width: 250px;
  }
`;

const DateAndMode = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100%;
`;

const Date = styled.span`
  color: #8a8a8a;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Mode = styled.span`
  border-radius: 20px;
  border: 1px solid #2966ff;
  background: #ffffff;
  color: #2966ff;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 2px 5px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 23px;
  gap: 2px;
`;

const Title = styled.h3`
  color: #303030;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const Content = styled.p`
  color: #8a8a8a;
  font-family: Noto Sans KR;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export default StudyCard;
