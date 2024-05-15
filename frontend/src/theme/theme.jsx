// src/theme/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f2936",
    },
    secondary: {
      main: "#219ebc",
    },
    background: {
      default: "#0f2936",
    },
  },
  typography: {
    fontFamily: '"Rubik", sans-serif',
  },
  spacing: 8,
});

export default theme;
