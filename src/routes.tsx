import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RootState } from "./store";
import Home from "./views/home/Home";
import Login from "./views/login/Login";

const Routes = () => {
  const { authenticated } = useSelector((state: RootState) => state.AuthReducer);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={authenticated ? Home : Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
