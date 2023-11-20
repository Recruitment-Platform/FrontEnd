import React, { useState } from 'react';
import styled from 'styled-components';
import MainHeader from '@components/layout/MainHeader';
import { signUp } from '@apis/api/user';
import { useNavigate } from 'react-router-dom';

function InitialMyInformation() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [githubLink, setGithub] = useState('');
  const [errorMessageVisible, setErrorMessageVisible] = useState({
    nicknameInfo: {
      message: '',
      visible: false,
    },
    addressInfo: {
      message: '',
      visible: false,
    },
  });

  const onClickRegisterBtn = async () => {
    const signUpResult = await signUp({
      nickname,
      githubLink,
    });

    // 회원가입 성공
    if (signUpResult.status === 200) {
      navigate('/', { replace: true });
    }
    if (signUpResult.status === 400) {
      if (signUpResult.code === 'U2') {
        // 중복된 닉네임일 경우
        setErrorMessageVisible({
          nicknameInfo: { message: signUpResult.error, visible: true },
          addressInfo: { message: '', visible: false },
        });
      }
      if (signUpResult.code === 'C1') {
        if (signUpResult.error.length === 1) {
          // 닉네임과 깃허브 주소 중 하나에 문제가 있는 경우
          if (signUpResult.error[0].field === 'nickname') {
            setErrorMessageVisible({
              nicknameInfo: {
                message: signUpResult.error[0].reason,
                visible: true,
              },
              addressInfo: { message: '', visible: false },
            });
          }
          if (signUpResult.error[0].field === 'githubLink') {
            // 닉네임과 깃허브 주소 모두 문제가 있는 경우
            setErrorMessageVisible({
              addressInfo: {
                message: signUpResult.error[0].reason,
                visible: true,
              },
              nicknameInfo: { message: '', visible: false },
            });
          }
        } else {
          setErrorMessageVisible({
            nicknameInfo: {
              message: signUpResult.error[0].reason,
              visible: true,
            },
            addressInfo: {
              message: signUpResult.error[1].reason,
              visible: true,
            },
          });
        }
      }
    }
  };

  return (
    <InitialMyInformationLayout>
      <MainHeader />
      <Main>
        <NicknameBox $visible={errorMessageVisible.nicknameInfo.visible}>
          <input
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            placeholder="닉네임을 입력해주세요. (필수)"
          />
          <p>
            <span>i</span>
            {errorMessageVisible.nicknameInfo.message}
          </p>
        </NicknameBox>
        <GithubBox $visible={errorMessageVisible.addressInfo.visible}>
          <input
            onChange={(e) => {
              setGithub(e.target.value);
            }}
            placeholder="깃허브 주소를 입력해주세요. (선택)"
          />
          <p>
            <span>i</span>
            {errorMessageVisible.addressInfo.message}
          </p>
        </GithubBox>
        <RegisterBtn onClick={onClickRegisterBtn}>가입하기</RegisterBtn>
      </Main>
    </InitialMyInformationLayout>
  );
}

const InitialMyInformationLayout = styled.div`
  margin: 0 auto;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 115px);
  max-height: 1024px;
  min-height: 500px;
  gap: 11px;
  padding-bottom: 20vh;

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
    justify-content: flex-start;
    padding-top: 40px;
    height: calc(100vh - 137px);
  }
`;

const InputBox = styled.div<{ $visible: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 9px;

  & > input {
    width: 320px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #e1e1e1;
    background: #ffffff;
    padding: 15px 19px;
    color: #5b5b5b;

    &::placeholder {
      color: #d9d9d9;
      font-family: Noto Sans KR;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  & > p {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #2966ff;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
    padding-left: 5px;
    gap: 5px;

    & > span {
      display: block;
      width: 15px;
      height: 15px;
      background-color: #2966ff;
      color: #ffffff;
      text-align: center;
      font-family: Noto Sans KR;
      font-size: 9px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      border-radius: 100px;
    }
  }
`;
const GithubBox = styled(InputBox)``;
const NicknameBox = styled(InputBox)``;

const RegisterBtn = styled.button`
  background: #2966ff;
  color: #ffffff;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 27px;
  padding: 12px 127px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #0048ff;
    -moz-transition: background, 0.3s;
    -o-transition: background, 0.3s;
    -webkit-transition: background, 0.3s;
    transition: background, 0.3s;
  }
`;

export default InitialMyInformation;
