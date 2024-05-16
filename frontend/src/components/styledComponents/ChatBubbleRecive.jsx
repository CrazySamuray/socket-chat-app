// src/components/StyledComponents/ChatBubbleRecieve.js
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const ChatBubbleRecieve = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(1, 2),
  borderRadius: "15px",
  maxWidth: "255px",
  position: "relative",
  display: "inline-block",
  marginLeft: "12px",
  marginTop: "10px",
  justifyContent: "flex-start",
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "-7px",
    width: "20px",
    height: "25px",
    backgroundColor: theme.palette.primary.main,
    borderBottomRightRadius: "16px 14px",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "-26px",
    width: "26px",
    height: "25px",
    backgroundColor: "#0c1b22",
    borderBottomRightRadius: "10px",
  },
  "& .time": {
    position: "absolute",
    bottom: "-20px",
    left: "10px",
    fontSize: "0.75rem",
    color: theme.palette.grey[500],
  },
}));

export default ChatBubbleRecieve;
