import React from "react";
import { Grid, Box } from "@mui/material";
import NavBar from "./components/Organisms/NavbarSection";
import Stories from "./components/Organisms/Storiessections";
import SwitchAccount from "./components/Molecules/SwithAccount";
import Accounts from "./components/Organisms/SuggestionSection";
import PostSection from "./components/Organisms/PostSection";

const App: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {/* NavBar Section */}
      <Grid item xs={2}>
        <NavBar />
      </Grid>

      {/* Main Content Section */}
      <Grid item>
        {" "}
        {/* Adjusted grid size for main content */}
        <Stories />
        <Grid>
          <PostSection />
        </Grid>
      </Grid>

      {/* Right Sidebar Section */}
      <Grid item xs={3}>
        <Box mb={11}>
          <SwitchAccount
            src="https://images.rawpixel.com/image_png_450/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlNV8zZF9jaGFyYWN0ZXJfaWxsdXN0cmF0aW9uX2NhcnRvb25fb2ZfYmFieV9mb3hfbl80YmQ5YTViMC0xMzJlLTRlMjMtODJjMi1lYzQxNDhhNTc1ODAucG5n.png"
            Text="-----prem-----"
          />
        </Box>
        <Accounts />
      </Grid>
    </Grid>
  );
};

export default App;
