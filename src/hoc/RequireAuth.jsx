import { Navigate, useLocation, } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
export default function RequireAuth({ children }) {
  const location = useLocation();
  const { auth } = useAuth();


  if (!auth) {
    return <Navigate to='/login' state={location} />
  }

  return children;
}
