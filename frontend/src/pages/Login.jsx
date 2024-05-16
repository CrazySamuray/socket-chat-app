import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import FormBox from "../components/styledComponents/FormBox";
import { Link } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form values:", values);
    // You can add your login logic here
    setSubmitting(false);
  };

  return (
    <FormBox>
      <Typography variant="h5" component="h1" gutterBottom>
        Login
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          touched,
          errors,
        }) => (
          <Form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Username"
              variant="outlined"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.username && Boolean(errors.username)}
              helperText={touched.username && errors.username}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
            <Box mt={2}>
              <Typography>
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "#2196f3" }}
                >
                  Don't have an account? Sign Up
                </Link>
              </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    </FormBox>
  );
}

export default Login;
