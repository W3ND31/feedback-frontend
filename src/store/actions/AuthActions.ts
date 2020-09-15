import { Dispatch } from "redux";
import { AUTH_LOGIN, AUTH_LOGIN_START, AUTH_LOGOUT } from "./types";

const LoginAction = (login: String, senha: String) => (dispatch: Dispatch) => {
  //TODO: Implementar login do usuário
};

const LogoutAction = () => (dispatch) => {
  dispatch({
    type: AUTH_LOGOUT,
  });
};

export default {
  LoginAction,
  LogoutAction,
};
