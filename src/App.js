import './App.css'
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import Main from './pages/Main';
import News from './pages/News';
import Story from './pages/Story';
import Profile from './pages/Profile';
import Header from './сomponents/Singlepage';

import RequireAuth from './hoc/RequireAuth'
import AuthProvider from './hoc/AuthProvider'

export default function App() {
  localStorage.login = 'admin';
  localStorage.password = '12345';
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path='profile' element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          } />
          <Route path='news' element={<News />} />
          <Route path='news/:id' element={<Story />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}