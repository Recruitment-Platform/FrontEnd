/* eslint-disable @typescript-eslint/no-explicit-any */
import { authInstance } from '../utils/instance';

interface SignupInfo {
  nickname: string;
  githubLink: string;
}

// 회원가입
export const signUp = async (info: SignupInfo) => {
  try {
    const { data, status } = await authInstance.patch(`/signup`, info);
    return { data, status };
  } catch (e: any) {
    console.log(e);
    return {
      error: e.response.data.detail, // error 상세사항
      status: e.response.status, // error status
      code: e.response.data.code, // error 코드
    };
  }
};
