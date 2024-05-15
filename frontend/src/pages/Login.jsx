// src/components/Login.jsx
import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import FormBox from "../components/styledComponents/FormBox";

const handleSignUpClick = () => {
  // Handle sign-up redirection logic here
  console.log("Redirect to sign-up page");
};

const handleLogin = (event) => {
  event.preventDefault();
  // Handle sign-up logic here
  console.log("Username:", username);
  console.log("Password:", password);
  console.log("Email:", email);
};

function Login() {
  return (
    <FormBox>
      <Typography variant="h5" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
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
      </form>
      <Box mt={2}>
        <Typography variant="body2">
          Dont have an account?{" "}
          <Button color="secondary" onClick={handleSignUpClick}>
            Sign Up
          </Button>
        </Typography>
      </Box>
    </FormBox>
  );
}

export default Login;
