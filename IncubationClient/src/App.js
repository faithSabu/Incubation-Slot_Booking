import './App.css';
import AdminLogin from './Components/Admin/Login/AdminLogin'
import ApplicationForm from './Components/ApplicationForm/ApplicationForm';
import LoginPage from './Components/Login/LoginPage';
import SignupPage from './Components/Signup/SignupPage';
import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/Home/HomePage';

// testing
import Testing from './Components/Test/Testing';
import Admin from './Components/Admin/Admin';
import { AuthLoginContext } from './Context/Context';
import { useState } from 'react';
// testing

function App() {
  const [user, setUser] = useState('');
  const [userId, setUserId] = useState('');
  return (
    <AuthLoginContext.Provider value={{ user, setUser, userId, setUserId }}>
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/applicationForm' element={<ApplicationForm />} />

        {/* <Route path='/' element={<Testing/>}/> */}

        <Route path='/admin' element={<Admin />} />

      </Routes>
    </AuthLoginContext.Provider>
  );
}

export default App;
