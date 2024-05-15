// src/App.jsx
import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Background from "./components/styledComponents/Background";
import Login from "./pages/Login.jsx";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Background>
        <Login />
      </Background>
    </ThemeProvider>
  );
}

export default App;
