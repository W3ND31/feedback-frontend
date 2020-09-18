import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomSnackbar from "./components/customSnackbar/CustomSnackbar";
import PrivateRoute from "./components/routes/PrivateRoute";
import { RootState } from "./store";
import BaseLayout from "./views/baseLayout/BaseLayout";
import Feedback from "./views/feedback/Feedback";
import FeedbackList from "./views/feedbackList/FeedbackList";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import NotFound from "./views/notFound/NotFound";
import Register from "./views/register/Register";

const Routes = () => {
  const { authenticated } = useSelector((state: RootState) => state.AuthReducer);

  return (
    <BrowserRouter>
      <BaseLayout>
        <CustomSnackbar />
        <Switch>
          <PrivateRoute path="/feedback/list" component={FeedbackList} />
          <PrivateRoute path="/feedback/:id" component={Feedback} />
          <Route path="/cadastrar" component={Register} />
          <Route exact path="/" component={authenticated ? Home : Login} />
          <Route component={NotFound} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  );
};

export default Routes;
