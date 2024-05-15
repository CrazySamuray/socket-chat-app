// src/components/Login.jsx
import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import LoginBox from "../components/styledComponents/LoginBox";

function Login() {
  return (
    <LoginBox>
      <Typography variant="h5" component="h1" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </LoginBox>
  );
}

export default Login;
