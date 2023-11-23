import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { myPageApi } from './api/ApiClient';

function MyPage() {
  const [memberDto, setMemberDto] = useState(null);

  const callApi = () => {
    const response = myPageApi()
      .then((response) => {
        if (response.status === 200) {
          setMemberDto(response.data);
          console.log('응답성공');
        } else {
          console.log(response);
        }
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    callApi();
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
