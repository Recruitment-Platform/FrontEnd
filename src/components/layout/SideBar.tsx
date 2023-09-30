import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as LongVector } from '@assets/icons/vector-long.svg';

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
function SideBar({ isOpen, setIsOpen }: SideBarProps) {
  const toggleSide = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <Layer onClick={toggleSide}>
          <ModalLayer>
            <MyInfoList>
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
                <LongVector />
                <li>로그아웃</li>
              </ul>
            </MyInfoList>
          </ModalLayer>
        </Layer>
      )}
    </>
  );
}
export default SideBar;

const movein = keyframes`
	from {
		left : -100%;
	}
	to {
		left: 0%;
	}
`;

const Layer = styled.ul`
  position: fixed;
  width: 739px;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 400;
  background: rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const ModalLayer = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 400;
  width: 330px;
  height: 100%;
  background-color: #fff;
  animation: ${movein} 0.5s 0s forwards;
`;

const MyInfoList = styled.div`
  margin: 100px 0px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  ul {
    li {
      cursor: pointer;
      margin: 20px 0px;
      font-family: Noto Sans KR;
      font-size: 16px;
      font-weight: 400;
      line-height: 23px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(89, 87, 87, 1);
      padding-left: 10px;
      p: nth-child(1) {
        color: #222222;
        font-family: Noto Sans KR;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      p: nth-child(2) {
        color: rgba(169, 169, 169, 1);
      }
    }
  }

  & > ul {
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
    & > li:nth-child(n + 2):nth-child(-n + 4) {
      border-radius: 15px;
      -moz-transition: all 0.3s ease-in;
      -o-transition: all 0.3s ease-in;
      -webkit-transition: all 0.3s ease-in;
      transition: all 0.3s ease-in;
      &:hover {
        background: #f4f4f4;
        margin: 0 10px;
      }
    }
  }
`;
