import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <Card
        sx={{
          backgroundColor: isSelected ? "#4e7cff" : "#0c1b22",
          cursor: "pointer",
          position: "relative", // Position relative for parent card
          "&:hover": {
            backgroundColor: isSelected ? "#82bfff" : "#89b0cd", // Light blue when hovered
          },
        }}
        onClick={() => setSelectedConversation(conversation)}
      >
        <CardContent
          style={{
            flex: 1,
            alignItems: "center",
            display: "flex",
            position: "relative", // Position relative for child content
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Avatar>
              <img
                src={conversation.profilePic}
                alt="user avatar"
                style={{ width: 45, height: 45, borderRadius: "50%" }}
              />
            </Avatar>
            <Typography
              style={{ paddingLeft: 10 }}
              variant="subtitle1"
              fontWeight="bold"
              color="#edf3ee"
            >
              {conversation.fullName}
            </Typography>
          </Box>
          {isOnline && ( // Conditionally render online dot
            <div
              style={{
                zIndex: 1, // Position absolute for dot
                top: 0, // Position at the top
                right: 0, // Position at the right
                width: 10,
                height: 10,
                backgroundColor: "green",
                borderRadius: "50%",
              }}
            />
          )}
        </CardContent>
      </Card>
      <Divider color="#1c2b2e" />
    </>
  );
};

export default Conversation;
