import { useState } from "react";
import { Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useUserContext } from "../../Context/userContext";
import "../../pages/Login&SignUp/styles.css"
import { LoginValidate } from "../../models/User";

export const FormLogin: React.FC<{}> = () => {
  const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
  const { handleSetValues } = useUserContext();


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();    
    alert(dataLogin);
    LoginValidate.validate(dataLogin).then(() =>{
     fetch("http://localhost:3000/", {
       body: JSON.stringify(dataLogin),
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
  }).catch((error) => {
       alert(error)
    })
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
                onChange={(e) => {
                  setDataLogin((prev) => ({ ...prev, email: e.target.value }));
                }}      
              size="lg"
              type="email"
              placeholder="name@example.com"
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
             onChange={(e) => {
              setDataLogin((prev) => ({ ...prev, password: e.target.value }));
            }}          
              type="password"
              placeholder="Password"
            />
          </FloatingLabel>
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
          Enter
        </Button>{" "}
        </div>
        
      </Form>
    </div>
  );
};
