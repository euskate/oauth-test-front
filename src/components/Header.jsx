import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <Link to="/login">로그인</Link>
        <Link to="/member">회원정보</Link>
        <Link to="/join">회원가입</Link>
        <Link to="/logout">로그아웃</Link>
      </nav>
    </div>
  );
}

export default Header;
