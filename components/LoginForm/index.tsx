import { useAuthContext } from "@/context/authContext";
import { url } from "@/utilities/endopoint";
import { LoginFormType } from "@/utilities/types";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Router from "next/router";
const LoginForm = () => {
  const { handleSetAuth } = useAuthContext();

  // Password visibility
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Form Functions
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormType>();

  const onSubmit: SubmitHandler<LoginFormType> = (formData) => {
    try {
      const response = fetch(url + "user/login", {
        body: JSON.stringify(formData),
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          res
            .json()
            .then((data) => handleSetAuth(data?.payload))
            .finally(() => {
              Router.push("myprofile");
            });
        } else throw new Error(res.statusText);
      });

      toast.promise(response, {
        loading: "Login In",
        success: `Succesfully logged in`,
        error: (error) => `${error.toString().slice(6)}`,
      });
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <Stack
      sx={{
        backgroundColor: "#fff",
        width: { xs: "100%", sm: "70%", lg: "30%" },
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        borderRadius: { sm: "5px" },
      }}
    >
      <Container maxWidth="xs">
        <Stack
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
          gap={3}
          p={3}
          minHeight="xl"
        >
          <Stack>
            <Typography align="center" variant="h5" component="h3">
              Login Now
            </Typography>
          </Stack>
          <TextField
            variant="outlined"
            type="text"
            label="Email"
            {...register("email", {
              required: {
                value: true,
                message: "This field is required",
              },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "You need a valid email",
              },
            })}
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
          />
          <TextField
            variant="outlined"
            label="Password"
            {...register("password", {
              required: {
                value: true,
                message: "This field is required",
              },
              maxLength: {
                value: 15,
                message: "Your password can't exceed 15 characters",
              },
              minLength: {
                value: 5,
                message: "Your password must have at least 5 characters",
              },
            })}
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    tabIndex={-1}
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Typography textAlign="center">
            <Link href={"/recover"}>Forgot your password?</Link>
          </Typography>
          <Button size="large" type="submit" variant="contained">
            Login
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};
export default LoginForm;
