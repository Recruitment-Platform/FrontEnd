import React from 'react';
import styled from 'styled-components';
import MainHeader from '@components/layout/MainHeader';
import { ReactComponent as DownLoadIcon } from '@assets/icons/download-icon.svg';

function MyPage() {
  return (
    <MyPageLayout>
      <MainHeader />
      <Main>
        <Aside>
          <ul>
            <li>내 정보</li>
            <li>프로필 설정</li>
            <li>내 활동내역</li>
            <li>북마크</li>
            <li>회원탈퇴</li>
          </ul>
        </Aside>
        <ContentSection>
          <h3>기본 정보</h3>
          <ProfileBox>
            <img src="/images/default-Profile.jpg" />
            <div>
              <label htmlFor="file">
                <DownLoadIcon />
                프로필 사진 업로드
              </label>
              <input type="file" id="file"></input>
              <p>10MB 이내의 이미지 파일을 업로드 해주세요.</p>
            </div>
          </ProfileBox>
          <InformationBox>
            <p>
              사용자 이름<span>*</span>
            </p>
            <div>
              <input type="text" />
              <p>0/15</p>
            </div>
            <p>*특수문자 사용이 불가합니다.</p>
          </InformationBox>
          <InformationBox>
            <p>
              깃허브 URL<span>*</span>
            </p>
            <div>
              <input type="text" />
            </div>
          </InformationBox>
          <InformationBox>
            <p>
              한 줄 프로필<span>*</span>
            </p>
            <div>
              <input
                type="text"
                placeholder="띄어쓰기 포함 20자 이내로 입력해주세요."
              />
              <p>0/20</p>
            </div>
          </InformationBox>
        </ContentSection>
      </Main>
    </MyPageLayout>
  );
}

const MyPageLayout = styled.div`
  background-color: #f9f9f9;
  height: auto;
  min-height: 100vh;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 40px;
  gap: 15px;
`;

const Aside = styled.aside`
  width: 245px;
  height: 285px;
  background: #ffffff;
  border-radius: 15px;
  border: 1px solid #e1e1e1;
  padding: 15px 30px;

  & > ul {
    width: 100%;
    height: 100%;

    & > li {
      color: #a9a9a9;
      font-family: Noto Sans KR;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      padding: 12px 0;
      text-align: left;
      cursor: pointer;

      &:nth-child(4) {
        padding-bottom: 20px;
      }

      &:last-child {
        border-top: 1px solid #e1e1e1;
        padding: 20px 0;
      }

      &:hover {
        color: #303030;
      }
    }
  }
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 780px;
  height: auto;
  background-color: #ffffff;
  border-radius: 15px;
  border: 1px solid #e1e1e1;
  padding: 30px 40px;

  // 사용자 이름 Box
  & > div:nth-child(3) {
    padding-top: 45px;
  }

  & > h3 {
    color: #a9a9a9;
    font-family: Noto Sans KR;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-bottom: 18px;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13px;

  & > img {
    width: 70px;
    height: 70px;
    border-radius: 100px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    & > label {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 193px;
      padding: 14px 0;
      border-radius: 25px;
      border: 1px solid #2966ff;
      background-color: #ffffff;
      color: #2966ff;
      font-family: Noto Sans KR;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding: 14px 0;
      gap: 8px;
      cursor: pointer;
    }

    & > input {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
    }

    & > p {
      color: #a9a9a9;
      font-family: Noto Sans KR;
      font-size: 1.3rem;
      font-style: normal;
      font-weight: 350;
      line-height: normal;
    }
  }
`;

const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 25px;
  gap: 10px;

  & > P {
    color: #595757;
    font-family: Noto Sans KR;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    & > span {
      color: #2966ff;
      font-family: Noto Sans KR;
    }

    &:nth-child(3) {
      color: #a9a9a9;
      font-family: Noto Sans KR;
      font-size: 1.3rem;
      font-style: normal;
      font-weight: 350;
      line-height: normal;
    }
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 700px;
    border: 1px solid #e1e1e1;
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    padding: 13px 0;

    & > input {
      width: 100%;
      height: 100%;
      color: #595757;
      font-family: Noto Sans KR;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding-left: 20px;
      padding-right: 20px;

      &::placeholder {
        color: #c0c0c0;
      }
    }

    & > p {
      color: #a9a9a9;
      text-align: right;
      font-family: Noto Sans KR;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding-right: 20px;
    }
  }
`;

export default MyPage;
