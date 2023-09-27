import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/images/socketLogo.svg';
import { ReactComponent as Vector } from '../assets/images/vector.svg';

function Nav() {
  return (
    <Navbar>
      <Logo />
      <Links>
        <ul>
          <li>
            <a>스터디</a>
            <Vector />
            <a>프로젝트</a>
            <Button>로그인</Button>
          </li>
        </ul>
      </Links>
    </Navbar>
  );
}

export default Nav;

const Navbar = styled.nav`
  max-width: 1440px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0 58px;
  height: 115px;
  flex-direction: row;
`;

const Links = styled.div`
  marigin-right: 10px;
  ul {
    float: right;
  }
  li {
    list-style: none;
    float: right;
    font-family: 'Noto Sans KR', sans-serif;
  }
  li svg {
    margin-left: 23px;
  }
  li a {
    font-size: 15px;
    text-align: center;
    padding-left: 25px;
    color: rgba(89, 87, 87, 1);
    text-decoration: none;
    line-height: 36px;
    &: hover {
      font-weight: 700;
      color: black;
    }
  }
`;

const Button = styled.button`
  background-color: #2c68ff;
  color: rgba(255, 255, 255, 1);
  width: 84px;
  height: 35px;
  border-radius: 10px;
  margin-left: 115px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`;
