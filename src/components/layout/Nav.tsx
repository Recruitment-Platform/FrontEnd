import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import SideBar from '@components/layout/SideBar';
import { ReactComponent as Logo } from '@assets/icons/socketLogo.svg';
import { ReactComponent as Vector } from '@assets/icons/vector.svg';
import { ReactComponent as HamburgerBar } from '@assets/icons/hamburgerbar-icon.svg';
import { ReactComponent as NoticeIcon } from '@assets/icons/notice-icon.svg';
import { ReactComponent as NoticeNewIcon } from '@assets/icons/notice-new-icon.svg';
function Nav() {
  const [loginState, setLoginState] = useState(true); // 로그인 여부 - 테스트용
  const [myInfoVisible, setMyInfoVisible] = useState(false); // myInfo visible 상태

  const [isOpen, setIsOpen] = useState(false); //햄버거 바 클릭에 따른 사이드 바 상태

  return (
    <NavbarLayout>
      <Logo />
      <Navbar>
        <Links>
          <ul>
            <li>
              <a>스터디</a>
              <Vector />
              <a>프로젝트</a>
            </li>
          </ul>
        </Links>
        {loginState ? (
          <MyInfo>
            <Notice>
              <NoticeIcon />
              <NoticeNewIcon />
            </Notice>
            <Profile
              src="/images/default-profile.jpg"
              onClick={() => {
                setMyInfoVisible(!myInfoVisible);
              }}
            />
            <HamburgerBarIcon
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
            {isOpen && loginState && (
              <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
          </MyInfo>
        ) : (
          <Button>로그인</Button>
        )}
      </Navbar>
      <MyInfoList $visible={myInfoVisible}>
        <ul>
          <li>
            <img src="/images/default-profile.jpg" />
            <div>
              <p>XOOYEON</p>
              <p>test01@gmail.com</p>
            </div>
          </li>
          <li>마이페이지</li>
          <li>내 작성글</li>
          <li>북마크</li>
          <li>로그아웃</li>
        </ul>
      </MyInfoList>
    </NavbarLayout>
  );
}

const NavbarLayout = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  padding: 0 58px;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    height: 129px;
    padding: 0 20px;
  }
`;

const Navbar = styled.div`
  display: flex;
  gap: 115px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 41px;
  }
`;

const Links = styled.div`
  ul {
    float: right;
  }
  li {
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
    font-weight: 400;
    cursor: pointer;

    &:hover {
      font-weight: 700;
      color: black;
      -moz-transition: all, 0.3s;
      -o-transition: all, 0.3s;
      -webkit-transition: all, 0.3s;
      transition: all, 0.3s;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MyInfo = styled.div`
  display: flex;
  align-items: center;
  width: 84px;
  height: auto;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
  }
`;

const Notice = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;

  & > svg:nth-child(2) {
    position: absolute;
    right: 0;
  }
`;

const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HamburgerBarIcon = styled(HamburgerBar)`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: inline;
  }
`;

const Button = styled.button`
  background-color: #2c68ff;
  color: rgba(255, 255, 255, 1);
  width: 84px;
  height: 35px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
`;

const set_opacity = (state: boolean) => keyframes`
  from {
    opacity: ${state ? 0 : 1};
  }
  to {
    opacity: ${state ? 1 : 0};
  }
`;

const MyInfoList = styled.div<{ $visible: boolean }>`
  display: ${(props) => (props.$visible ? 'flex' : 'none')};
  align-items: flex-end;
  width: 320px;
  height: 294px;
  position: absolute;
  top: 125px;
  right: 0;
  z-index: 2;
  animation: ${(props) => set_opacity(props.$visible)} 0.3s 0s forwards;

  // 말풍선처럼 만들기 위해 추가
  &::after {
    content: '';
    display: block;
    width: 0;
    border-color: #ffffff transparent;
    border-style: solid;
    border-width: 0px 12px 12px 12px;
    position: absolute;
    top: 1px;
    right: 65px;
  }
  // 말풍선처럼 만들기 위해 추가
  &::before {
    content: '';
    display: block;
    width: 0;
    border-color: #e1e1e1 transparent;
    border-style: solid;
    border-width: 0px 12px 12px 12px;
    position: absolute;
    top: -1px;
    right: 65px;
  }

  & > ul {
    width: 100%;
    height: calc(294px - 10px);
    background-color: #ffffff;
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    overflow: hidden;

    & > li {
      color: #595757;
      font-family: Noto Sans KR;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-align: left;
      padding: 10px 30px;
      cursor: pointer;
    }

    // 프로필
    & > li:nth-child(1) {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e1e1e1;
      padding: 19px 18px;
      gap: 18px;
      cursor: auto;

      & > img {
        width: 50px;
        height: 50px;
        background: #eeeeee;
        border-radius: 100px;
      }

      & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        & > p:nth-child(1) {
          color: #222222;
          font-family: Noto Sans KR;
          font-size: 2rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }

        & > p:nth-child(2) {
          color: #a9a9a9;
          font-family: Noto Sans KR;
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }

    // 2번째부터 4번째까지(마이페이지 ~ 북마크)
    & > li:nth-child(n + 2):nth-child(-n + 4) {
      border-radius: 20px;
      -moz-transition: all 0.3s ease-in;
      -o-transition: all 0.3s ease-in;
      -webkit-transition: all 0.3s ease-in;
      transition: all 0.3s ease-in;
      &:hover {
        background: #f4f4f4;
        margin: 0 5px;
      }
    }

    // 로그아웃
    & > li:nth-child(5) {
      border-top: 1px solid #e1e1e1;
      padding: 19px 30px;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default Nav;
