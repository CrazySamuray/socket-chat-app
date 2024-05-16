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

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <Card
        sx={{
          backgroundColor: isSelected ? "#4e7cff" : "#0c1b22",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: isSelected ? "#82bfff" : "#89b0cd", // Light blue when hovered
          },
        }}
        onClick={() => setSelectedConversation(conversation)}
      >
        <CardContent style={{ flex: 1, alignItems: "center" }}>
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
        </CardContent>
      </Card>

      <Divider color="#1c2b2e" />
    </>
  );
};

export default Conversation;
