import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Member from './components/Member';
import Join from './components/Join';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/join' element={<Join />} />
          <Route path='/member' element={<Member />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
