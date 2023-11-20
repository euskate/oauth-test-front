import React, { createContext, useContext, useState } from 'react';
import { apiClient, authenticationApi } from '../api/ApiClient';


// 인증 컨텍스트 생성
const AuthContext = createContext();

// Context Provider : 인증상태, 사용자정보, 로그인, 로그아웃 함수를 자식 컴포넌트에 공급
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);  // 토큰 상태추가

  // 로그인 ( 인증요청 : 비동기 )
  const login = async (username, password) => {

    // 서비스에 인증 요청 => JWT 토큰 응답
    try {
      const response = await authenticationApi(username, password);
      // 정상응답(200)인 경우
      if (response.status === 200) {
        const jwtToken = 'Bearer ' + response.data.token;
        // 상태 등록 : 인증 + 유저 + 토큰
        setIsAuthenticated(true);
        setUsername(username);
        setToken(jwtToken);

        // 인터셉터 등록! 한번 등록된 인터셉터는 모든 API 요청에 사용된다.
        apiClient.interceptors.request.use((config) => {
          console.log('가로채기(intercept)하여 요청 헤더에 토큰 인증정보를 추가');
          config.headers.Authorization = jwtToken;
          return config;
        });
        // 정상응답이 아닌 경우 => 로그아웃
      } else {
        logout();
        return false;
      }
      // 네트워크 에러인 경우 => 로그아웃
    } catch (error) {
      logout();
      return false;
    }
  }

  // 로그아웃 : 인증, 사용자, 토큰 상태 해제
  const logout = () => {
    setIsAuthenticated(false);
    setUsername(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 인증 컨텍스트를 사용하는 커스텀 훅
export const useAuth = () => {
  return useContext(AuthContext);
};