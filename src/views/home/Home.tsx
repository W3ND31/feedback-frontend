import { Button, Grid } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { DatePicker } from "formik-material-ui-pickers";
import React from "react";
import { withRouter } from "react-router-dom";
import ArrowBack from "../../components/arrowBack/ArrowBack";
import MuiStylesApp from "../../style/MuiStylesApp";

interface MyFormValues {
  username: string;
  feedbackDate: Date;
  improvePoints: string;
  keepPoints: string;
  suggestions: string;
  finalFeedback: string;
}

const initialValues: MyFormValues = {
  username: "",
  feedbackDate: new Date(),
  improvePoints: "",
  keepPoints: "",
  suggestions: "",
  finalFeedback: "",
};

const Home = (props: any) => {
  const classes = MuiStylesApp();

  const handleSubmit = (values: any, actions: any) => {
    console.log(typeof values, typeof actions);
    console.log(values, actions);
  };

  return (
    <Grid container direction="column" justify="flex-start" id="containerHome">
      <Grid item className={classes.gridTitle}>
        <ArrowBack title="Cadastro de Feedbacks" />
      </Grid>
      <Grid item className={classes.form}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values: MyFormValues, actions: any) => handleSubmit(values, actions)}
        >
          <Form>
            <Grid container direction="column" justify="center" spacing={2} className={classes.containerForm}>
              <Grid item>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={6}>
                    <Field
                      id="username"
                      name="username"
                      variant="outlined"
                      label="Usuário"
                      fullWidth
                      component={TextField}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      id="feedbackDate"
                      name="feedbackDate"
                      inputVariant="outlined"
                      format="DD/MM/yyyy"
                      label="Data"
                      fullWidth
                      component={DatePicker}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Field
                  id="improvePoints"
                  name="improvePoints"
                  variant="outlined"
                  multiline
                  label="Pontos a melhorar"
                  fullWidth
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12}>
                <Field
                  id="keepPoints"
                  name="keepPoints"
                  multiline
                  variant="outlined"
                  label="Pontos a manter"
                  fullWidth
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12}>
                <Field
                  id="suggestions"
                  name="suggestions"
                  variant="outlined"
                  label="Sugestões"
                  multiline
                  fullWidth
                  component={TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  id="finalFeedback"
                  name="finalFeedback"
                  variant="outlined"
                  label="Feedback final"
                  multiline
                  fullWidth
                  component={TextField}
                />
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" color="primary">
                  Cadastrar
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
};

export default withRouter(Home);
