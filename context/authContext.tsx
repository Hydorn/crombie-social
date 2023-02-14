import React, { useContext, useEffect, useState } from "react";

let token: string = "";

type AuthType = {
  token: string;
};

const AuthContext = React.createContext({
  token,
  handleSetAuth: (param: AuthType) => {},
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    token = localStorage.getItem("token") || "";
  }, [token]);

  const [auth, setAuth] = useState<AuthType>({
    token: token,
  });

  const handleSetAuth = (param: AuthType) => {
    localStorage.setItem("token", param.token);
    setAuth(param);
  };
  return (
    <AuthContext.Provider value={{ ...auth, handleSetAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
export default AuthProvider;
