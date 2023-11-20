import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { authenticationApi } from "./api/ApiClient";

function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const url = "http://localhost:8080/authenticate";
    const response = await authenticationApi(
      formData.get("email"),
      formData.get("password")
    );
    console.log(response.data);

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
        <Link to="/join">회원가입</Link>
      </form>
    </div>
  );
}

export default Login;
