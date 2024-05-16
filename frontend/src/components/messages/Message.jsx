import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import ChatBubbleSend from "../styledComponents/ChatBubbleSend";
import ChatBubbleRecive from "../styledComponents/ChatBubbleRecive";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatPosition = fromMe ? "flex-end" : "flex-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  return (
    <Box
      display="flex"
      alignItems="center"
      mb={3}
      justifyContent={chatPosition}
    >
      {!fromMe && (
        <Avatar style={{ marginLeft: "5px", zIndex: 1 }}>
          <img
            src={profilePic}
            alt="user avatar"
            style={{ width: 45, height: 45, borderRadius: "50%" }}
          />
        </Avatar>
      )}
      {fromMe ? (
        <ChatBubbleSend>
          {message.message}{" "}
          <Typography className="time">{formattedTime}</Typography>
        </ChatBubbleSend>
      ) : (
        <ChatBubbleRecive>
          {message.message}{" "}
          <Typography className="time">{formattedTime}</Typography>
        </ChatBubbleRecive>
      )}
      {fromMe && (
        <Avatar style={{ marginLeft: "5px" }}>
          <img
            src={profilePic}
            alt="user avatar"
            style={{ width: 45, height: 45, borderRadius: "50%" }}
          />
        </Avatar>
      )}
    </Box>
  );
};

export default Message;
