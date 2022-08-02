import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { signIn } = useAuth();

  const fromPage = location.state?.pathname || '/';

  let valid = null;
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      login: e.target.login.value,
      password: e.target.password.value,
    }

    valid = localStorage.login === data.login && localStorage.password === data.password;

    signIn(valid, () => navigate(fromPage, { replace: true }))



  }

  console.log('Я отрендарился');
  return (
    <div className="container">
      <h1 className="title">Нужно войти, что бы продолжить</h1>
      <form onSubmit={handleSubmit} className="form">
        <input name="login" placeholder="Введите логин" className="input" type="text" />
        <input name="password" placeholder="Введите пароль" className="input" type="password" />
        <label htmlFor="form"></label>
        <button className=" btn sign-in" type="submit">Войти</button>
      </form>
    </div>

  );
}