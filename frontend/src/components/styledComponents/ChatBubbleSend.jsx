// src/components/StyledComponents/LoginBox.js
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const ChatBubbleSend = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(2),
  borderTopRightRadius: 0,
  maxWidth: "75%",
  position: "relative",
  display: "inline-block",
  alignSelf: "flex-end",
  marginRight: "10px",
}));

export default ChatBubbleSend;
