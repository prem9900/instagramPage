import React from "react";
import { Grid, styled } from "@mui/material";
import { POST_ITEMS } from "../../Utils/constants";
import { Favorite, Comment, Send } from "@mui/icons-material"; // Import Send icon
import CreatePost from "../../Molecules/PostItem";

// Define the icon mappings
const iconMapping: Record<string, JSX.Element> = {
  favorite: <Favorite />,
  comment: <Comment />,
  send: <Send />, // Replace share with send
};

const PostItem = styled(Grid)({
  flexDirection: "column",
});

const PostSection = () => {
  return (
    <Grid item>
      <Grid container direction="column">
        {POST_ITEMS.map((item, index) => (
          <PostItem key={index}>
            <CreatePost
              src={item.src}
              text={item.Text}
              icons={item.icons.map(icon => iconMapping[icon.toLowerCase()] || <Favorite />)} // Map icons to JSX elements
                                 />
          </PostItem>
        ))}
      </Grid>
    </Grid>
  );
};

export default PostSection;
