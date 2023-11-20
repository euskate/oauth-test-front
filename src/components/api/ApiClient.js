import axios from 'axios';

// API 요청을 할 Clinet 생성 및 응답해줄 BackEnd url 정의
export const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
});

// API 요청 : path, method, data 정의
export const authenticationApi = (username, password) =>
  apiClient.post(`/authenticate`, { username, password });