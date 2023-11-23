import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Join from './components/Join';
import Header from './components/Header';
import { AuthProvider } from './components/security/AuthContext';
import MyPage from './components/MyPage';
import Logout from './components/Logout';
import Hello from './components/Hello';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/join' element={<Join />} />
            <Route path='/myPage' element={<MyPage />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/hello' element={<Hello />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
