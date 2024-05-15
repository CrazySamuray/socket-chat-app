import { Grid } from "@mui/material";
// import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Sidebar />
      </Grid>
      {/* <Grid item xs={12} sm={8}>
        <MessageContainer />
      </Grid> */}
    </Grid>
  );
};
export default Home;
