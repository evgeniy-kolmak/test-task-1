import { Navigate, useLocation, } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RequireAuth({ children }) {
  const location = useLocation();
  const auth = useSelector(state => state.auth.auth);

  if (!auth) {
    return <Navigate to='/login' state={location} />
  }

  return children;
}
