import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/images/searchIcon.svg';
import { ReactComponent as FilterIcon } from '../assets/images/filterIcon.svg';

function SearchBar() {
  return (
    <>
      <Input>
        <Icon>
          <SearchIcon />
        </Icon>
        <Filter>
          <FilterIcon />
        </Filter>
        <input type="text" placeholder="검색어를 입력 해주세요." />
      </Input>
    </>
  );
}

export default SearchBar;

const Icon = styled.svg`
  position: absolute;
  width: 30px;
  height: 30px;
  margin: 18px 0px 0px -240px;
  z-index: 2;
`;
const Input = styled.div`
  justify-content: space-between;
  align-items: center;
  text-align: center;
  input {
    width: 530px;
    height: 65px;
    font-size: 20px;
    font-family: 'Noto Sans KR', sans-serif;
    border-radius: 33px;
    z-index: 1;
    border: 1px solid rgba(169, 169, 169, 1);
    color: black;
    padding-left: 80px;
  }
  input::placeholder {
    color: #e6e6e6;
  }
`;
const Filter = styled.div`
  svg {
    position: absolute;
    width: 30px;
    height: 30px;
    margin: 18px 0px 0px 210px;
    z-index: 2;
  }
`;
