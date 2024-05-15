import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import GenderCheckbox from "./GenderCheckBox";
import FormBox from "../../components/styledComponents/FormBox";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    // Handle sign-up logic here
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("confirmPassword:", confirmPassword);
    console.log("Gender:", gender);
  };

  const handleLoginClick = () => {
    // Handle login redirection logic here
    console.log("Redirect to login page");
  };

  return (
    <FormBox>
      <Typography variant="h5" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSignUp}>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <GenderCheckbox
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <Box mt={2}>
          <Button color="secondary" onClick={handleLoginClick}>
            Already have an account?{" "}
          </Button>
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
      </form>
    </FormBox>
  );
}

export default SignUp;
