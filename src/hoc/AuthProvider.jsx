import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  const signIn = (valid, cb) => {
    setAuth(valid);
    cb();
  }

  const signOut = (cb) => {
    setAuth(null);
    cb();
  }

  const value = { auth, signIn, signOut }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}