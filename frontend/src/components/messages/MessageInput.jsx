import React from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MessageInput = () => {
  return (
    <form style={{ padding: "0 16px", marginBottom: "10px" }}>
      <TextField
        fullWidth
        size="small"
        placeholder="Send a message"
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
