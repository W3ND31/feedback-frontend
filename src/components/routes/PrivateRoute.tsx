import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { RootState } from "../../store";
import Login from "../../views/login/Login";

const PrivateRoute = (props: any) => {
  const { authenticated } = useSelector((state: RootState) => state.AuthReducer);

  if (!authenticated) {
    return <Route path="/" component={Login} />;
  }
  return <Route {...props} />;
};

export default PrivateRoute;
