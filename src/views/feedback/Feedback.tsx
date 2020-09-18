import { Grid } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";
import ArrowBack from "../../components/arrowBack/ArrowBack";
import FeedbackForm from "../../components/feedbackForm/FeedbackForm";
import MuiStylesApp from "../../style/MuiStylesApp";
const Feedback = (props: any) => {
  const classes = MuiStylesApp();

  return (
    <Grid container direction="column" justify="flex-start" id="containerHome">
      <Grid item className={classes.gridTitle}>
        <ArrowBack title="Detalhes do Feedback" />
      </Grid>
      <FeedbackForm update={true} />
    </Grid>
  );
};

export default withRouter(Feedback);
