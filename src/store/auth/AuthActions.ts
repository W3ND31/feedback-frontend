import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import AuthService from "../../services/AuthService";
import { SnackbarOpen } from "../snackbar/SnackbarActions";
import { AuthActionTypes, AUTH_ERROR, AUTH_LOGOUT, AUTH_SUCCESS, Login } from "./types";

export const LoginAction = (login: Login): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  return AuthService.loginUser(login)
    .then((res) => {
      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          ...res.data,
          loading: false,
        },
      });
      dispatch(SnackbarOpen({ severity: "success", message: "Login efetuado com sucesso" }));
    })
    .catch((err) => {
      dispatch(SnackbarOpen({ severity: "error", message: err.response.data.message }));
      dispatch({
        type: AUTH_ERROR,
        payload: {
          user: {
            username: "",
          },
          ...err.response.data,
          loading: false,
        },
      });
    });
};

export const LogoutAction = (): AuthActionTypes => {
  return {
    type: AUTH_LOGOUT,
  };
};
