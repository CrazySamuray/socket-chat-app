import React from "react";
import { Box } from "@mui/material";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <Box
      sx={{
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: "5px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#8e8e8e",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#757575",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
      }}
    >
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
    </Box>
  );
};

export default Conversations;
