import React from 'react';
import { styled } from 'styled-components';

interface TagProps {
  name: string; // 태그명
}

function TechTag({ name }: TagProps) {
  return <Tag>{name}</Tag>;
}

const Tag = styled.button`
  background: #f0f0f0;
  color: #8a8a8a;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 4px 8px;
  border-radius: 20px;
`;

export default TechTag;
