import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

function Header() {
  // const authContext = useAuth();
  // const { isAuthenticated, logout } = authContext;
  const { isAuthenticated, logout } = useAuth();
  return (
    <div>
      <nav>
        {!isAuthenticated && <Link to='/login'>로그인</Link>}
        {!isAuthenticated && <Link to='/join'>회원가입</Link>}
        {isAuthenticated && <Link to='/myPage'>회원정보</Link>}
        {isAuthenticated && (
          <Link to='/logout' onClick={logout}>
            로그아웃
          </Link>
        )}
      </nav>
    </div>
  );
}

export default Header;
