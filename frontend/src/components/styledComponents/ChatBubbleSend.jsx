// src/components/StyledComponents/LoginBox.js
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const ChatBubbleSend = styled(Box)(({ theme }) => ({
  color: "white",
  background: "#0B93F6",
  alignSelf: "flex-end",
  position: "relative",
  padding: theme.spacing(1, 2),
  borderRadius: "15px",
  maxWidth: "255px",
  wordWrap: "break-word",
  marginBottom: "4px",
  marginTop: "10px",
  marginRight: "12px",
  lineHeight: "24px",
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    right: "-7px",
    width: "20px",
    height: "25px",
    backgroundColor: "#0B93F6",
    borderBottomLeftRadius: "16px 14px",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    right: "-26px",
    width: "26px",
    height: "25px",
    backgroundColor: "#0c1b22",
    borderBottomLeftRadius: "10px",
  },
  "& .time": {
    position: "absolute",
    bottom: "-20px",
    right: "10px",
    fontSize: "0.75rem",
    color: theme.palette.grey[500],
  },
}));

export default ChatBubbleSend;
