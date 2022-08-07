import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../store/authSlice";
import { useState } from "react";





export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [invalidForm, setInvalidForm] = useState(null);

  const fromPage = location.state?.pathname || '/';


  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      login: e.target.login.value,
      password: e.target.password.value,
    }

    let validData = localStorage.login === data.login && localStorage.password === data.password;

    const signInProfile = () => {
      dispatch(signIn(validData));
      navigate(fromPage, { replace: true });
    }

    if (validData) {
      signInProfile();
    } else {
      setInvalidForm(true);
    }

  }

  return (
    <div className="container">
      <h1 className="title">Нужно войти, что бы продолжить</h1>
      <form onSubmit={handleSubmit} className="form">
        <input name="login" placeholder="Введите логин" className="input" type="text" />
        <input name="password" placeholder="Введите пароль" className="input" type="password" />
        <label className="error" htmlFor="form">{invalidForm ? 'Данные введены не верно' : null}</label>
        <button className=" btn sign-in" type="submit">Войти</button>
      </form>
    </div>

  );
}