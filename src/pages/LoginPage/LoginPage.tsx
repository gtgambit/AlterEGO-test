import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Paper, TextField, Button, Typography, Box } from "@mui/material";
import { validationSchema } from "./schema";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { authUser } from "../../redux/Auth/authSlice";

interface IFormInputs {
  username: string;
  password: string;
}

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
  });
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (data: IFormInputs) => {
    if (data.username === "admin" && data.password === "12345") {
      dispatch(authUser({ username: data.username, password: data.password }));
      navigate("/profile");
    } else {
      setLoginError(true);
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1675777464785-9422fe5987d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzI1MjM1NA&ixlib=rb-4.0.3&q=80&w=1080)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Typography component="h1" variant="h5" sx={{ mt: 3 }}>
          {t("auth.userLogin")}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(handleLogin)}
          noValidate
          sx={{ mt: 1 }}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                fullWidth
                id="username"
                label={t("auth.username")}
                error={Boolean(errors.username)}
                helperText={errors.username?.message}
                autoFocus
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    { borderColor: "secondary.main" },
                }}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                fullWidth
                id="password"
                label={t("auth.password")}
                type="password"
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    { borderColor: "secondary.main" },
                }}
              />
            )}
          />
          {loginError && (
            <Typography variant="body2" color="error" sx={{ mt: 1 }}>
              {t("errors.incorrectCredentials")}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
            color="primary">
            {t("auth.login")}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
