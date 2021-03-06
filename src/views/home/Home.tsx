import { Grid } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";
import ArrowBack from "../../components/arrowBack/ArrowBack";
import FeedbackForm from "../../components/feedbackForm/FeedbackForm";
import MuiStylesApp from "../../style/MuiStylesApp";

const Home = (props: any) => {
  const classes = MuiStylesApp();

  return (
    <Grid container direction="column" justify="flex-start" id="containerHome">
      <Grid item className={classes.gridTitle}>
        <ArrowBack title="Cadastro de Feedbacks" />
      </Grid>
      <FeedbackForm />
    </Grid>
  );
};

export default withRouter(Home);
