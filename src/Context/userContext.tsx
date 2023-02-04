import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const UserContext = React.createContext({
  username: "",
  email: "",
  token: "",
  handleSetValues: (key: string, value: string) => {},
});

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    token: localStorage.getItem("token") ?? "",
  });
  const handleSetValues = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    if (values.token) {
      fetch("http://localhost:3000/api/me", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${values.token}`,
        },
      }).then((response) => {

        response.json().then((jsonResponse) => {
          console.log(jsonResponse);
          
          handleSetValues("email", jsonResponse.email);
        });
      });
    }
    else {
      navigate('/')
    }
  }, [values.token]);

  return (
    <UserContext.Provider value={{ ...values, handleSetValues }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;