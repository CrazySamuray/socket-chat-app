import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Background = styled(Box)(({ theme }) => ({
  backgroundColor: "#0f2936", // Replace with your desired background color
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export default Background;
