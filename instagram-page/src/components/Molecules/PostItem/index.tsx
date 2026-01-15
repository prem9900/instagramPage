import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import Typography from "../../Atoms/Typography";

interface PostItemProps {
  icons: JSX.Element[]; // Updated to an array of JSX elements
  text: string;
  src: string;
}

const PostCell = styled(Grid)({
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  border: "3px solid black",
  overflow: "hidden",
  cursor: "pointer",
  margin: "7px",
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const StyledImage1 = styled("img")({
  width: "60vh",
  height: "70vh",
  objectFit: "cover",
});

const TextContainer = styled(Typography)({
  fontSize: "14px",
  marginTop: "15px",
});

const CardItemCell = styled(Grid)({
  width: "60vh",
  height: "70vh",
  border: "1px solid grey",
  borderRadius: "8px",
  marginTop: "4px",
  marginLeft: "150px",
});
const TextContainer1 = styled(Typography)({
  fontSize: "15px",
  marginLeft: "0px",
  marginTop: "30px",
  color: "#A8A8A8",
});

const CreatePost: React.FC<PostItemProps> = ({ src, text, icons }) => {
  return (
    <>
      <Grid container marginLeft="146px" marginTop="40px">
        <Grid item>
          <PostCell>
            <StyledImage src={src} alt="Post" />
          </PostCell>
        </Grid>
        <Grid item>
          <TextContainer>{text}</TextContainer>
        </Grid>
      </Grid>
      <CardItemCell>
        <Grid item>
          <StyledImage1 src={src} alt="Post" />
        </Grid>
        <Grid item marginLeft="0px" marginTop="30px">
          <TextContainer1>100 Likes</TextContainer1>
        </Grid>
      </CardItemCell>
      <Grid container spacing={1} marginTop="0px" marginLeft="140px">
        {icons.map((icon, index) => (
          <Grid item key={index}>
            {icon}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CreatePost;
