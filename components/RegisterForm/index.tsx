import {
  Button,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

type RegisterFormType = {
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
};

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterFormType>();
  const onSubmit: SubmitHandler<RegisterFormType> = (data) => {
    console.log(data);
  };

  const handleModal = () => {
    console.log("gola padre");
  };
  return (
    <>
      <Stack>
        <Typography align="center" variant="h3" component="h2">
          Welcome to @Crombie-Social!
        </Typography>
        <Typography
          align="center"
          variant="h5"
          component="h3"
          sx={{ paddingBottom: "30px" }}
        >
          If you're new you can register here
        </Typography>
      </Stack>
      <Container maxWidth="xs">
        <Stack component={"form"} onSubmit={handleSubmit(onSubmit)} gap={2}>
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
            type="text"
            label="User Name"
            {...register("username", {
              required: {
                value: true,
                message: "This field is required",
              },
              maxLength: {
                value: 15,
                message: "Your username can't exceed 15 characters",
              },
              minLength: {
                value: 5,
                message: "Your username must have at least 5 characters",
              },
            })}
            error={Boolean(errors.username?.message)}
            helperText={errors.username?.message}
          />
          <TextField
            variant="outlined"
            type="password"
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
          />
          <TextField
            variant="outlined"
            type="password"
            label="Repeat Password"
            {...register("repeatPassword", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            error={Boolean(errors.repeatPassword?.message)}
            helperText={errors.repeatPassword?.message}
          />

          <Link
            component="div"
            underline="hover"
            onClick={handleModal}
            sx={{ textAlign: "center", cursor: "pointer" }}
          >
            Already have an account? Sign in here.
          </Link>
          <Button size="large" type="submit" variant="contained">
            Register
          </Button>
        </Stack>
      </Container>
    </>
  );
};
export default RegisterForm;
