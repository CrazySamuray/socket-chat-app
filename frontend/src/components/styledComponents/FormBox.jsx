// src/components/StyledComponents/LoginBox.js
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const FormBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff", // Replace with your desired box color
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: 500,
}));

export default FormBox;
