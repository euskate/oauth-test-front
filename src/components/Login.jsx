import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, useAuth } from './security/AuthContext';

function Login() {
  const { login, isAuthenticated } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    await login(formData.get('email'), formData.get('password'));
  };
  return (
    <div>
      <h2>Login</h2>
      <form method='post' onSubmit={handleSubmit}>
        {isAuthenticated && <div>로그인 되었습니다.</div>}
        <div>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='email을 입력하세요.'
          />
        </div>
        <div>
          <input
            type='password'
            name='password'
            placeholder='비밀번호를 입력하세요'
          />
        </div>
        <button>로그인</button>
      </form>
    </div>
  );
}

export default Login;
