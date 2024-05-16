// src/theme/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiStack: {
      styleOverrides: { root: { minWidth: "450px", flex: "flex-col" } },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#081419",
          input: { color: "#ffffff" },
          placeholder: { color: "#ffffff" },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#081419",
          borderBottom: "1px solid #1c2b2e",
          color: "#edf3ee",
          height: "60px",
          placeholder: { color: "#ffffff" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          maxHeight: 70,
          backgroundColor: "#0c1b22",
          alignItems: "center",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#0f2936",
    },
    secondary: {
      main: "#219ebc",
    },
    background: {
      default: "#0c1b22",
    },
  },
  typography: {
    fontFamily: '"Rubik", sans-serif',
  },
  spacing: 8,
});

export default theme;
