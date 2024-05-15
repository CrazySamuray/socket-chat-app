// src/App.jsx
import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Background from "./components/styledComponents/Background";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import theme from "./theme/theme";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Background>
        <Home />
      </Background>
    </ThemeProvider>
  );
}

export default App;
