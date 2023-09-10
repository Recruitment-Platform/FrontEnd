import React from 'react';
import { Tag } from 'styles/TagStyled';
interface TagProps {
  name: string;
}

function RecommendTag({ name }: TagProps) {
  return <Tag color={'#2966FF26'}>{name}</Tag>;
}

export default RecommendTag;
