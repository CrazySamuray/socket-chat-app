// src/components/StyledComponents/ChatBubbleRecieve.js
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const ChatBubbleRecieve = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(2),
  borderTopLeftRadius: 0,
  maxWidth: "75%",
  position: "relative",
  display: "inline-block",
  marginLeft: "15px",
  justifyContent: "flex-start",
}));

export default ChatBubbleRecieve;
