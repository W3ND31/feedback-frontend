import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./views/home/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
