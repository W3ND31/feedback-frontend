import { Button, Grid, Typography } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React from "react";
import { withRouter } from "react-router-dom";
import MuiStylesApp from "../../style/MuiStylesApp";

interface MyFormValues {
  username: string;
}
const Home = (props: any) => {
  const classes = MuiStylesApp();
  const handleSubmit = (values: any, actions: any) => {
    console.log(typeof values, typeof actions);
  };

  const initialValues: MyFormValues = { username: "" };

  return (
    <Grid className={classes.container} container direction="column" alignItems="center" justify="center">
      <Grid item>
        <Typography component="h1" variant="h5">
          Cadastro de Feedbacks
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={(values: MyFormValues, actions: any) => handleSubmit(values, actions)}
        >
          <Form>
            <Field id="username" name="username" placeholder="Usuário" />
            <Button type="submit">Cadastrar</Button>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
};

export default withRouter(Home);
