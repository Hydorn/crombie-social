import * as yup from "yup";

export interface User {
  id: number;
  username: string;
  email: string;
  photo: string;
  follows: number;
  followers: number;
}

export const LoginValidate = yup.object({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Minimum: 8 characters")
    .max(20, "Maximum: 20 characters")
    .required("Password is required"),
});

const schema = yup.object().shape({
  
});

export const SignUpValidate = yup.object({
  username: yup
    .string()
    .min(8, "Minimum: 8 characters")
    .max(25, "Maximum: 25 characters")
    .required("Username is required"),
  email: yup.string().required("Email is required"), 
  password: yup.string().required("Password is required"), 
  repeatPassword: yup.string().required("Password is required"), 
});
