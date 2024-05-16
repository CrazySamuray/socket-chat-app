import React from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = React.useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form
      style={{ padding: "0 16px", marginBottom: "10px" }}
      onSubmit={handleSubmit}
    >
      <TextField
        sx={{
          backgroundColor: "#081419",
          input: { color: "#ffffff" },
          placeholder: { color: "#ffffff" },
        }}
        fullWidth
        value={message}
        size="small"
        placeholder="Send a message"
        onChange={(e) => setMessage(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <SendIcon sx={{ color: "#edf3ee" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default MessageInput;
