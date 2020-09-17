import { Grid, IconButton, Typography } from "@material-ui/core";
import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import React from "react";
import { withRouter } from "react-router-dom";
import MuiStylesApp from "../../style/MuiStylesApp";

const ArrowBack = (props: any) => {
  const classes = MuiStylesApp();

  const handleBack = () => {
    props.history.goBack();
  };

  return (
    <Grid container direction="row" className={classes.arrowBackContainer}>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleBack}>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h5" noWrap>
        {props.title}
      </Typography>
    </Grid>
  );
};

export default withRouter(ArrowBack);
