import React, { useState } from "react";
import { IconButton, InputBase, Paper, Snackbar } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      setSnackbarMessage("Search term must be at least 3 characters long");
      setSnackbarOpen(true);
      return;
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      setSnackbarMessage("No such user found!");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={0}
        sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
      >
        <InputBase
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          inputProps={{
            style: { color: "#edf3ee", padding: 5, alignContent: "center" },
            placeholderTextColor: "#edf3ee",
          }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchSharpIcon sx={{ color: "#edf3ee" }} />
        </IconButton>
      </Paper>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Positioning Snackbar at top center
      />
    </>
  );
};

export default SearchInput;
