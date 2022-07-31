export default function Login() {
  const formValidate = (e) => {
    e.preventDefault();
    let valid = false; //Будет стейт
    const data = {
      login: e.target.login.value,
      password: e.target.password.value,
    }
    localStorage.login === data.login && localStorage.password === data.password ? valid = true : valid = false;
    console.log(valid);
  }
  return (
    <form onSubmit={(e) => formValidate(e)} className="form">
      <input name="login" placeholder="Введите логин" className="input" type="text" />
      <input name="password" placeholder="Введите пароль" className="input" type="password" />
      <button className="login" type="submit">Войти</button>
    </form>
  );
}