import React from "react";
import { Typography, Box } from "@mui/material";
import ForumSharpIcon from "@mui/icons-material/ForumSharp";

const NoChatSelected = () => {
  // Assuming useAuthContext is imported and authUser is accessible
  // const { authUser } = useAuthContext();

  // If you don't have access to authUser, you can replace it with a static value
  const authUser = { fullName: "User" }; // Replace with your actual user data or remove if not needed

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        color: "#fff",
      }}
    >
      <Box sx={{ px: 4, textAlign: "center", color: "#fff" }}>
        <Typography variant="h5" gutterBottom>
          Welcome 👋 {authUser.fullName} ❄
        </Typography>
        <Typography>Select a chat to start messaging</Typography>
        <ForumSharpIcon
          sx={{ fontSize: "3rem", margin: "1rem", color: "#fff" }}
        />
      </Box>
    </Box>
  );
};

export default NoChatSelected;
