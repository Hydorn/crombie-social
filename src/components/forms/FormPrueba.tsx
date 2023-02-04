import "../../pages/Login&SignUp/styles.css";
import { Formik } from "formik";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { LoginValidate } from "../../models/User";



export const FormLoginCopy: React.FC<{}> = () => {
  return (
    <div className="w-75">
      <Formik
        validationSchema={LoginValidate}
        onSubmit={console.log}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
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
        )}
      </Formik>
    </div>
  );
};
