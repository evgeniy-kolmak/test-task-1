import { Link, NavLink, Outlet } from "react-router-dom";
import Login from "../pages/Login";




export default function Header() {
  return (
    <>
      <header className='header'>
        <NavLink className="nav-link" to="/">Главная</NavLink>
        <NavLink className="nav-link" to="/news">Новости</NavLink>
        <div className="user-profile">
          <Link className="profile" to="/profile">&#197;</Link>
          <Link className=" btn sign-in" to="/login">Войти</Link></div>
      </header>
      <Outlet />

    </>
  );
}