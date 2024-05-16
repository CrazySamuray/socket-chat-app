import { Grid } from "@mui/material";
import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <Grid container>
      <Grid item>
        <Sidebar />
      </Grid>
      <Grid item sm={6}>
        <MessageContainer />
      </Grid>
    </Grid>
  );
};
export default Home;
