import React, { useEffect } from "react";
import logo from "../Images/LogoTransparente.png";
import Image from 'react-bootstrap/Image'
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";


export const ErrorPage: React.FC<{}> = ({ }) => {

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(()=>{
      navigate('/home');
    }, 3000)
  },[]);

    return (
    <div className="pageBody">
      <div className="container-form">
        <h3 className="font-weight-bold">Oh! Something has gone wrong...</h3>
        <Image src={logo} className="img-fluid" alt="logo"></Image>        
        <button className="btn btn-outline-secondary btn-gohome" onClick={()=> navigate("/home")}>GO HOME</button>
      </div>
    </div>
  );
};
