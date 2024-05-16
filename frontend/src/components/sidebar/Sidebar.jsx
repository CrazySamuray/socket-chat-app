import { Box } from "@mui/material";
import theme from "../../theme/theme";
import { ThemeProvider } from "@mui/material";
import Conversations from "./ConversationWrapper";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          border: "1px solid #1c2b2e",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "300px",
        }}
      >
        <SearchInput />
        <Conversations />
        <LogoutButton />
      </Box>
    </ThemeProvider>
  );
};
export default Sidebar;
