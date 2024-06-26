import { Box } from "@mui/material";
import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "500px", maxHeight: "500px" }}>
      <Sidebar />
      <MessageContainer />
    </Box>
  );
};

export default Home;
