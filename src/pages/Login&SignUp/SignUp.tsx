import React, { useState } from "react";
import logo from "../Images/LogoTransparente.png";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { RegisterForm } from "../../components/forms/registerForm";
import { RegisterFormCopy } from "../../components/forms/registerForm copy";


export const SignUpPage: React.FC<{}> = () => {

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  });


  return (
    <div className="pageBody">
      <div className="container-form gap-SU">        
        <h2 className="font-weight-bold">SIGN UP</h2>
        <Image src={logo} className="img-fluid" alt="logo"></Image>
        <h3 className="font-weight-bold">CROMBIE</h3>
        <RegisterFormCopy/>
        <p style={{ fontSize: "small" }}>Do you already have an account? <a href="/login">Sign in here.</a></p>
      </div>
    </div>
  );
};
