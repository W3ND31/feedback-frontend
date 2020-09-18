import { Button, Grid } from "@material-ui/core";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { TextField } from "formik-material-ui";
import { DatePicker } from "formik-material-ui-pickers";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import FeedbackService from "../../services/FeedbackService";
import { RootState } from "../../store";
import { SnackbarOpen } from "../../store/snackbar/SnackbarActions";
import MuiStylesApp from "../../style/MuiStylesApp";
import Feedback from "../types/feedback.type";

interface MyFormValues {
  _id: string;
  subject: string;
  feedbackDate: Date;
  improvePoints: string;
  keepPoints: string;
  suggestions: string;
  finalFeedback: string;
}

const initialValues: MyFormValues = {
  _id: "",
  subject: "",
  feedbackDate: new Date(),
  improvePoints: "",
  keepPoints: "",
  suggestions: "",
  finalFeedback: "",
};

const FeedbackForm = (props: any) => {
  const dispatch = useDispatch();
  const classes = MuiStylesApp();

  const [formValues, setFormValues] = useState(initialValues);

  const { user } = useSelector((state: RootState) => state.AuthReducer);

  useEffect(() => {
    if (props.update) {
      const id: string = props.match && props.match.params && props.match.params.id;
      if (id !== null && id.length > 0) {
        FeedbackService.getFeedback(id).then((res) => {
          let feedback = res.data;
          delete feedback.createdAt;
          delete feedback.updatedAt;
          delete feedback.__v;

          setFormValues(feedback);
        });
      }
    }
  }, [props]);

  const handleSubmit = (values: MyFormValues, actions: FormikHelpers<MyFormValues>) => {
    let feedback: Feedback = {
      ...values,
      creator: user.username,
    };

    const promise = props.update
      ? FeedbackService.updateFeedback(values._id, feedback)
      : FeedbackService.createFeedback(feedback);

    promise
      .then((res) => {
        dispatch(SnackbarOpen({ severity: "success", message: res.data.message }));
        actions.setSubmitting(false);
        props.update ? props.history.goBack() : actions.resetForm();
      })
      .catch((err) => {
        dispatch(SnackbarOpen({ severity: "error", message: err.response.data.message }));
        actions.setSubmitting(false);
      });
  };

  return (
    <Grid item className={classes.form}>
      <Formik
        initialValues={formValues}
        enableReinitialize={true}
        onSubmit={(values: MyFormValues, actions: FormikHelpers<MyFormValues>) => handleSubmit(values, actions)}
      >
        <Form>
          <Grid container direction="column" justify="center" spacing={2} className={classes.containerForm}>
            <Grid item>
              <Grid container direction="row" spacing={2}>
                <Grid item xs={6}>
                  <Field
                    id="subject"
                    name="subject"
                    variant="outlined"
                    label="Usuário"
                    fullWidth
                    disabled={props.update}
                    required
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
                    required
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
                required
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
                required
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
                required
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
                required
                component={TextField}
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                {props.update ? "Atualizar" : "Cadastrar"}
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Grid>
  );
};

export default withRouter(FeedbackForm);
