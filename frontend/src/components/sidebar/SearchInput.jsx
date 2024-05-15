import React, { useState } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
// import useConversation from "../../zustand/useConversation";
// import useGetConversations from "../../hooks/useGetConversations";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  // const { setSelectedConversation } = useConversation();
  // const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!search) return;
    // if (search.length < 3) {
    //   return toast.error("Search term must be at least 3 characters long");
    // }

    // const conversation = conversations.find((c) =>
    //   c.fullName.toLowerCase().includes(search.toLowerCase())
    // );

    // if (conversation) {
    //   setSelectedConversation(conversation);
    //   setSearch("");
    // } else toast.error("No such user found!");
  };

  return (
    <Paper
      style={{
        backgroundColor: "#081419",
        borderBottom: "1px solid #1c2b2e",
        color: "#edf3ee",
      }}
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
          style: { color: "#edf3ee" },
          placeholderTextColor: "#edf3ee",
        }}
      />
      <IconButton type="submit" aria-label="search">
        <SearchSharpIcon sx={{ color: "#edf3ee" }} />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
