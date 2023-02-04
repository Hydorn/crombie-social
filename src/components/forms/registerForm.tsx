import React, { useState } from "react";
import { Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useUserContext } from "../../Context/userContext";

export const RegisterForm: React.FC<{}> = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  });
  const { handleSetValues } = useUserContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/auth/register", {
      body: JSON.stringify(form),
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    }).then((response) => {
      response.json().then((jsonResponse) => {
        handleSetValues("token", jsonResponse.payload.token);
        localStorage.setItem("token", jsonResponse.payload.token);
      });
    });
  };

  return (
    <div className="w-75">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
            style={{ color: "black", fontSize: "small" }}
          >
            <Form.Control
              size="lg"
              type="email"
              placeholder="name@example.com"
              required
              onChange={(e) => {
                setForm((prev) => ({ ...prev, email: e.target.value }));
              }}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="formBasicUsername">
          <FloatingLabel
            controlId="floatingInput"
            label="Username"
            className="mb-3"
            style={{ color: "black", fontSize: "small" }}
          >
            <Form.Control
              size="lg"
              type="text"
              placeholder="Username"
              required
              onChange={(e) => {
                setForm((prev) => ({ ...prev, username: e.target.value }));
              }}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
          <FloatingLabel
            controlId="floatingInput"
            label="Password"
            className="mb-3"
            style={{ color: "black", fontSize: "small" }}
          >
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setForm((prev) => ({ ...prev, password: e.target.value }));
              }}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
          <FloatingLabel
            controlId="floatingInput"
            label="Repeat Password"
            className="mb-3"
            style={{ color: "black", fontSize: "small" }}
          >
            <Form.Control
              type="repeatPassword"
              placeholder="Repeat Password"
              required
              onChange={(e) => {
                setForm((prev) => ({ ...prev, password: e.target.value }));
              }}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            style={{ color: "white", fontSize: "small" }}
            label="I accept the terms and conditions of use"
            required
          />
        </Form.Group>
        <div className="form-btn">
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
          Create Account
        </Button>{" "}
        </div>        
      </Form>
    </div>
  );
};

