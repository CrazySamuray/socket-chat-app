import React from "react";
// CircularProgress
import { IconButton, Box, CircularProgress } from "@mui/material";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <Box style={{ marginTop: "auto" }}>
      {!loading ? (
        <IconButton>
          <LogoutSharpIcon
            style={{ width: 24, height: 24, color: "white" }}
            onClick={logout}
          />
        </IconButton>
      ) : (
        <CircularProgress size={24} style={{ color: "white" }} />
      )}
    </Box>
  );
};

export default LogoutButton;
