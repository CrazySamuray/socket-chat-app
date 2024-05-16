// src/App.jsx
import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Background from "./components/styledComponents/Background";
import theme from "./theme/theme";
import Home from "./pages/Home.jsx";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import { useAuthContext } from "./context/AuthContext.jsx";

function App() {
  const { authUser } = useAuthContext();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Background>
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          />
          {/* <Route path="/chat" element={<Chat />} /> */}
        </Routes>
      </Background>
    </ThemeProvider>
  );
}

export default App;
