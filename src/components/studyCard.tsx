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
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 500 280"
        preserveAspectRatio="xMinYMin meet"
      >
        <foreignObject
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/1999/xhtml"
        >
          <CardBox>
            <DateAndMode>
              <Date>{date}</Date>
              <Mode>{mode}</Mode>
            </DateAndMode>
            <Contents>
              <Title>{title}</Title>
              <Content>{content}</Content>
            </Contents>
            <Tags $visible={Boolean(tags.length - 3)}>
              {tags.map((tag) => {
                return <TechTag key={tag} name={tag} />;
              })}
              <p>+{tags.length - 3}</p>
            </Tags>
          </CardBox>
        </foreignObject>
      </svg>
    </StudyCardLayout>
  );
}

const StudyCardLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 15px;
  border: 1px solid #e1e1e1;
  background: #ffffff;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
`;

const CardBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 36px 35px;
  position: relative;
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

  @media screen and (max-width: 768px) {
    padding: 2px 12px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 23px;
  gap: 2px;

  @media screen and (max-width: 768px) {
    gap: 7px;
  }
`;

const Title = styled.h3`
  color: #303030;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  width: 100%;
`;

const Content = styled.p`
  color: #8a8a8a;
  font-family: Noto Sans KR;
  font-size: 1.6em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  width: 100%;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    -webkit-line-clamp: 2;
  }
`;

const Tags = styled.div<{ $visible: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 35px;

  & > button:nth-child(n + 4) {
    // 4번째부터 적용
    display: none;
  }

  & > p {
    display: ${(props) => (props.$visible ? 'block' : 'none')};
    color: #8a8a8a;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
    flex-wrap: wrap;
  }
`;

export default StudyCard;
