import { createContext, useState } from "react";

export const Authcontext = createContext();

function AuthProvider({ children }) {
  const [isAuth, setisAuth] = useState(null);
  return (
    <Authcontext.Provider value={{ isAuth, setisAuth }}>
      {children}
    </Authcontext.Provider>
  );
}

export default AuthProvider;
