import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";

const NotFound = (props: any) => {
  return (
    <Grid container direction="column" justify="center" alignContent="center" alignItems="center">
      <Typography>A página solicitada não foi encontrada</Typography>
      <Button onClick={() => props.history.push("/")} color="primary" variant="contained">
        Página Principal
      </Button>
    </Grid>
  );
};

export default withRouter(NotFound);
