import React, { useEffect } from 'react';
import { helloApi } from './api/ApiClient';
import { useState } from 'react';

function Hello() {
  const [msg, setMsg] = useState(null);
  const callApi = async () => {
    const response = await helloApi();
    setMsg(response.data);
  };
  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      Hello
      {msg}
    </div>
  );
}

export default Hello;
