import { useEffect, useState } from "react";

const Hue = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, [token]);
  return <h1>El token es = {token}</h1>;
};

export default Hue;
