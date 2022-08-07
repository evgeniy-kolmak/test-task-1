import { useNavigate } from "react-router-dom"
import { signOut } from "../store/authSlice";
import { useDispatch } from "react-redux";

export default function Profile() {
  const navigate = useNavigate(null);
  const dispatch = useDispatch();

  const signOutProfile = () => {
    dispatch(signOut(false));
    navigate('/', { replace: true })
  }

  return (
    <div className="container">
      <h1 className="title">Профиль</h1>
      <div className="profile-wrapper">
        <div className="profile-img">A</div>
        <div className="profile-info">
          <h2 className="profile-title">Обо мне</h2>
          <div className="profile-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste hic cumque qui! Expedita nemo eveniet, sint aspernatur et accusantium sit veniam ea esse delectus quasi aliquid sunt adipisci ratione odio excepturi laborum voluptas impedit velit quis quas. Architecto eaque perspiciatis iste numquam nobis quasi, odio omnis odit, debitis ratione id? Possimus aliquid neque magnam cum molestias ut nostrum soluta, eaque ratione maiores obcaecati at aliquam. Minus doloremque vel fugit doloribus quos? Dicta dolore inventore officia impedit?</div>
          <ul className="profile-items">
            <h3 className="profile-subtitle">Достижения</h3>
            <li className="profile-item">Lorem, ipsum dolor.</li>
            <li className="profile-item">Lorem ipsum dolor sit amet consectetur.</li>
            <li className="profile-item">Lorem ipsum dolor sit.</li>
            <li className="profile-item">Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li className="profile-item">Lorem ipsum dolor sit amet.</li>

          </ul>
          <button className="btn sign-out" onClick={signOutProfile}>Выйти</button>
        </div>
      </div>
    </div>
  );
}