import { Grid, Typography } from "@material-ui/core";
import React from "react";

const Home = (props: any) => {
  return (
    <Grid container direction="column" alignItems="center" justify="center" style={{ height: "100%" }}>
      <Grid item>
        <Typography component="h1" variant="h5">
          Home
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
