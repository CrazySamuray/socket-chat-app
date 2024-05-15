import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Typography,
  Box,
} from "@mui/material";

const Conversation = () => {
  return (
    <>
      <Card sx={{ maxHeight: 70, backgroundColor: "#0c1b22" }}>
        <CardContent style={{ flex: 1 }}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar>
              <img
                src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
                alt="user avatar"
                style={{ width: 45, height: 45, borderRadius: "50%" }}
              />
            </Avatar>
            <Typography
              style={{ paddingLeft: 10 }}
              variant="subtitle1"
              fontWeight="bold"
              color="#edf3ee"
            >
              John Doe
            </Typography>
            <Typography style={{ marginLeft: 90 }} variant="h4">
              🎃
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Divider color="#1c2b2e" />
    </>
  );
};

export default Conversation;
