import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Login from './Pages/Login';
import Main from './Pages/Main';
import News from './Pages/News';
import Profile from './Pages/Profile';


export default function App() {
  localStorage.login = 'admin';
  localStorage.password = '12345';
  return (
    <>
      <header className='header'>
        <Link className="nav-link" to="/">Главная</Link>
        <Link className="nav-link" to="/profile">Профиль</Link>
        <Link className="nav-link" to="/news">Новости</Link>
        <Link className="nav-link" to="/login">Логин</Link>
      </header>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/news' element={<News />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}