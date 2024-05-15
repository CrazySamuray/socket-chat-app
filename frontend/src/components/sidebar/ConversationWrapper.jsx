import React from "react";
import { Box } from "@mui/material";
import Conversation from "./Conversation";

const Conversations = () => {
  return (
    <Box sx={{ overflow: "auto" }}>
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </Box>
  );
};

export default Conversations;
