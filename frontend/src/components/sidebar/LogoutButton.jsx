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
            style={{ width: 30, height: 30, color: "white", padding: 5 }}
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
