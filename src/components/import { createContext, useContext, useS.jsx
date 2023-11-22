import { createContext, useContext, useState } from 'react';

// 1. 인증 컨텍스트 생성
export const AuthContext = createContext();

// 1-1. 인증 컨텍스트를 불러오는 커스텀 훅 : useAuth
export const useAuth = () => useContext(AuthContext);

// 2.  다른 컴포넌트에 인증 컨텍스트 공유
export default function AuthProvider({ children }) {
  // 3. 컨텍스트에 상태를 넣는다.
  // 3-1. 인증여부
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 3-2. 로그인 함수
  function login(username, password) {
    if (username === 'abcd' && password === '1234') {
      console.log('로그인 성공');
      setIsAuthenticated(true);
      return true;
    } else {
      console.log('로그인 실패');
      setIsAuthenticated(false);
      return false;
    }
  }

  // 3-3. 로그아웃
  function logout() {
    console.log('로그아웃 되었습니다.');
    setIsAuthenticated(false);
  }

  // 4. 컨텍스트 공급자에 상태를 전달한다.
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
