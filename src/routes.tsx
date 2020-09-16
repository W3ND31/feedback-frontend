import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RootState } from "./store";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import NotFound from "./views/notFound/NotFound";

const Routes = () => {
  const { authenticated } = useSelector((state: RootState) => state.AuthReducer);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={authenticated ? Home : Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
