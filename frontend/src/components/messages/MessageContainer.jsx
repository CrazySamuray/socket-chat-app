import React, { useState, useEffect } from "react";
import { Paper, Typography, Box } from "@mui/material";
import MessagesWrapper from "./MessagesWrapper";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelectedPage";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

function MessageContainer() {
  const { authUser } = useAuthContext();
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        border: "1px solid #1c2b2e",
      }}
    >
      {selectedConversation ? (
        <>
          <Paper>
            <Typography sx={{ p: 2 }}>
              To: {selectedConversation.fullName}
            </Typography>
          </Paper>
          <MessagesWrapper />
          <MessageInput />
        </>
      ) : (
        <NoChatSelected authUser={authUser} />
      )}
    </Box>
  );
}

export default MessageContainer;
