import React from "react";
import { Button, Image } from "react-bootstrap";
import logo from "../Images/LogoTransparente.png";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const EnterPage: React.FC<{}> = ({}) => {
  return (
    <div className="pageBody">
      <div className="container-form">
        <div>
          <h3 className="font-weight-bold text-center py-3">
            It is an honor to have you here!
          </h3>
          <h2 className="font-weight-bold text-center">
            Welcome to our family!
          </h2>
        </div>
        <Image src={logo} className="img-fluid" alt="logo"></Image>
        <h3 className="font-weight-bold">CROMBIE</h3>
        <a href="/login">
          <Button
            variant="outline-secondary"
            type="submit"
            style={{
              padding: "10px",
              width: "120px",
              borderColor: "#5C636A",
              color: "white",
            }}
          >
            Let's go!
          </Button>{" "}
        </a>

        <p style={{ fontSize: "small" }}>
          You are not registered? <a href="/signup">Do it here</a>
        </p>
      </div>
    </div>
  );
};
