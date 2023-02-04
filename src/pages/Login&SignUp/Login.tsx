import React from "react";
import { FormLogin } from "../../components/forms/LoginForm";
import logo from "../Images/LogoTransparente.png";
import Image from 'react-bootstrap/Image'
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormLoginCopy } from "../../components/forms/FormPrueba";
import { RegisterFormCopy } from "../../components/forms/registerForm copy";


export const LoginPage: React.FC<{}> = ({ }) => {



  return (
    <div className="pageBody">
      <div className="container-form">
        <h2 className="font-weight-bold">LOGIN</h2>
        <Image src={logo} className="img-fluid" alt="logo"></Image>
        <h3 className="font-weight-bold">CROMBIE</h3>
        <FormLoginCopy/>
        <p style={{ fontSize: "small" }}>You are not registered? <a href="/signup">Do it here</a></p>
      </div>
    </div>
  );
};
