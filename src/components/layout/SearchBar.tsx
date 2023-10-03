import React from 'react';
import styled from 'styled-components';
import { ReactComponent as FilterIcon } from '@assets/icons/filter-icon.svg';
import { ReactComponent as SearchIcon } from '@assets/icons/search-icon.svg';

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

const Icon = styled.div`
  svg {
    position: absolute;
    width: 30px;
    height: 30px;
    margin: 18px 0px 0px -240px;
    z-index: 2;
  }
  @media screen and (max-width: 768px) {
    svg {
      margin: 27px 0px 0px -120px;
      width: 17px;
      height: 17px;
    }
  }
  //Galaxy-Fold
  @media screen and (max-width: 320px) {
    svg {
      margin: 23px 0px 0px -90px;
      width: 17px;
      height: 17px;
    }
  }
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
    padding-right: 80px;
  }
  input::placeholder {
    color: #e6e6e6;
  }
  @media screen and (max-width: 768px) {
    input {
      width: 305px;
      height: 50px;
      margin-top: 10px;
      padding-left: 60px;
      padding-right: 60px;
      font-size: 15px;
    }
    input::placeholder {
      font-size: 15px;
    }
  }
  //Galaxy-Fold
  @media screen and (max-width: 320px) {
    input {
      width: 200px;
      height: 40px;
      margin-top: 10px;
      padding-left: 60px;
      font-size: 12px;
      padding: 0px 40px;
    }
    input::placeholder {
      font-size: 12px;
    }
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
  @media screen and (max-width: 768px) {
    svg {
      margin: 28px 0px 0px 120px;
      width: 17px;
      height: 17px;
    }
  }
  //Galaxy-Fold
  @media screen and (max-width: 320px) {
    svg {
      margin: 23px 0px 0px 70px;
      width: 17px;
      height: 17px;
    }
  }
`;