import React from "react";
import { withRouter } from "react-router-dom";
import ArrowBack from "../../components/arrowBack/ArrowBack";
import Login from "../login/Login";

const Register = (props: any) => {
  return (
    <>
      <ArrowBack title="Voltar" />
      <Login cadastrar={true} />
    </>
  );
};

export default withRouter(Register);
