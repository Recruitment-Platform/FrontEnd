import React from 'react';
import styled from 'styled-components';
import MainHeader from '@components/layout/MainHeader';
import { ReactComponent as KakaoIcon } from '@assets/icons/kakao-icon.svg';
import { ReactComponent as GoogleIcon } from '@assets/icons/google-icon.svg';
import { ReactComponent as GithubIcon } from '@assets/icons/github-icon.svg';

function Login() {
  return (
    <LoginLayout>
      <MainHeader />
      <Main>
        <h1>반가워요👋</h1>
        <ButtonBox>
          <button>
            <KakaoIcon />
            카카오로 가입하기
          </button>
          <button>
            <GoogleIcon />
            구글로 가입하기
          </button>
          <button>
            <GithubIcon />
            깃허브로 가입하기
          </button>
        </ButtonBox>
      </Main>
    </LoginLayout>
  );
}

const LoginLayout = styled.div``;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 115px;
  gap: 55px;

  & > h1 {
    color: #303030;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media screen and (max-width: 768px) {
    padding-top: 19px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 320px;
  gap: 15px;

  & > button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background: #fff;
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    gap: 6px;
    cursor: pointer;

    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export default Login;
