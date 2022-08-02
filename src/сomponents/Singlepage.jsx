import { Link, NavLink, Outlet } from "react-router-dom";


export default function Header() {
  return (
    <>
      <header className='header'>
        <NavLink className="nav-link" to="/">Главная</NavLink>
        <NavLink className="nav-link" to="/news">Новости</NavLink>
        <Link className="user-profile" to="/profile">
          <span className="profile" >A</span>
          <span className="user" >Профиль</span></Link>
      </header>
      <Outlet />

    </>
  );
}