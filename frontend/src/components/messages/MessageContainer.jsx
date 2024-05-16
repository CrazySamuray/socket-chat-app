import React, { useState } from "react";
import { Paper, Typography } from "@mui/material";
import MessagesWrapper from "./MessagesWrapper";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelectedPage";

function MessageContainer() {
  const [isChatSelected, setIsChatSelected] = useState(true); // State to track if chat is selected

  // Condition to check if chat is selected
  // You can replace this condition with your actual condition\

  return (
    <>
      {isChatSelected ? (
        <>
          <Paper>
            <Typography sx={{ p: 2 }}>Message</Typography>
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
