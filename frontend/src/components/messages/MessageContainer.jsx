import React, { useState, useEffect } from "react";
import { Paper, Typography } from "@mui/material";
import MessagesWrapper from "./MessagesWrapper";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelectedPage";
import useConversation from "../../zustand/useConversation";

function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <>
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
        <NoChatSelected />
      )}
    </>
  );
}

export default MessageContainer;
