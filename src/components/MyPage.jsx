import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { myPageApi } from './api/ApiClient';

function MyPage() {
  const [memberDto, setMemberDto] = useState(null);

  useEffect(async () => {
    const response = await myPageApi();
    console.log(response);
    setMemberDto(response.data);
  }, []);
  return (
    <div>
      {memberDto && (
        <div>
          <h1>MyPage</h1>
          <div>이메일 : {memberDto.email}</div>
          <div>이름 : {memberDto.name}</div>
          <div>권한 : {memberDto.role}</div>
        </div>
      )}
    </div>
  );
}

export default MyPage;
