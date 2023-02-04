import React from "react";
import { Formik } from "formik";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  username: yup
    .string()
    .min(8, "Minimum: 8 characters")
    .max(25, "Maximum: 25 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Minimum: 8 characters")
    .max(25, "Maximum: 25 characters")
    .required("Password is required"),
  repeatPassword: yup
    .string().oneOf([yup.ref("password"), null], "Password must match")
    .required("Password is required"),
  terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
});

export const RegisterFormCopy: React.FC<{}> = () => {
  
  
  
  return (
    <div className="w-75">
      <Formik
        validationSchema={schema}
        onSubmit={(data)=>{console.log(data)}}
        initialValues={{
          email: "",
          username: "",
          password: "",
          repeatPassword: "",
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
                style={{ color: "black", fontSize: "small" }}
              >
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={touched.email && !!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
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
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={touched.username && !!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
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
                  aria-describedby="inputGroupPrepend"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={touched.password && !!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
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
                  type="password"
                  placeholder="Repeat Password"
                  aria-describedby="inputGroupPrepend"
                  name="repeatPassword"
                  value={values.repeatPassword}
                  onChange={handleChange}
                  isInvalid={touched.repeatPassword && !!errors.repeatPassword}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.repeatPassword}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                required
                name="terms"
                label="I accept the terms and conditions of use"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik0"
                style={{ color: "white", fontSize: "small" }}
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
        )}
      </Formik>
    </div>
  );
};
