import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext, useAuth } from "./security/AuthContext";

function Login() {

  const useAuth()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // const response = await login(
    //   formData.get("email"),
    //   formData.get("password")
    // );
    // console.log(response.data);

    // //.catch((error) => console.log(error.stack));
    // const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson);
  };
  return (
    <div>
      <h2>Login</h2>
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email을 입력하세요."
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <button>로그인</button>
      </form>
    </div>
  );
}

export default Login;
