import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Redirect() {
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const accessToken = query.get('accessToken');
  const refreshToken = query.get('refreshToken');
  const profileSetup = query.get('profileSetup');

  useEffect(() => {
    if (accessToken && refreshToken && profileSetup) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // profileSetup을 boolean 형태로 변환
      if (!JSON.parse(profileSetup)) {
        navigate('/login/set', { replace: true });
        return;
      }
      navigate('/', { replace: true });
    }
  }, []);

  return <></>;
}

export default Redirect;
