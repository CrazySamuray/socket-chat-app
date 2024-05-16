import { Avatar, Box, Typography } from "@mui/material";
import ChatBubbleSend from "../styledComponents/ChatBubbleSend";
import ChatBubbleRecive from "../styledComponents/ChatBubbleRecive";

const Message = () => {
  return (
    <>
      <Box display="flex" alignItems="center" mb={3} justifyContent="flex-end">
        <ChatBubbleSend>yo</ChatBubbleSend>
      </Box>
      {/* <Box
        display="flex"
        alignItems="center"
        mb={1}
        justifyContent="flex-start"
      >
        <ChatBubbleRecive>yo</ChatBubbleRecive>
      </Box> */}

      {/* <Typography
        variant="caption"
        color="textSecondary"
        sx={{
          position: "absolute",
          bottom: 0,
          right: 8,
          paddingTop: 3,
          fontSize: "0.6rem",
        }}
      >
        12:42
      </Typography> */}
    </>
  );
};

export default Message;
