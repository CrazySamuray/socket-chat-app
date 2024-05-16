import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";

const MessagesWrapper = () => {
  const { messages, loading } = useGetMessages();

  return (
    <Box
      sx={{
        height: "83vh",
        overflowY: "auto",
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
      {!loading &&
        messages.length > 0 &&
        messages.map((message, idx) => (
          <Message key={idx} message={message} lastIdx={idx} />
        ))}

      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {!loading && messages.length === 0 && (
        <Typography sx={{ color: "#808080", textAlign: "center", m: 1 }}>
          Send a message to start the conversation
        </Typography>
      )}
    </Box>
  );
};

export default MessagesWrapper;
