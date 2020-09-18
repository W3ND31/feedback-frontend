export const AUTH_LOGOUT = "AUTH_LOGOUT";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";
export const AUTH_LOGIN_START = "AUTH_LOGIN_START";

export interface Login {
  username: string;
  password: string;
}

export interface LoginPayload {
  username: string;
}

export interface AuthState {
  user: LoginPayload;
  authenticated: boolean;
  loading: boolean;
  message: string;
}

interface LoginSuccess {
  type: typeof AUTH_SUCCESS;
  payload: { user: LoginPayload; message: string; loading: boolean };
}

interface LogoutAction {
  type: typeof AUTH_LOGOUT;
}

interface LoginStart {
  type: typeof AUTH_LOGIN_START;
  payload: {
    loading: boolean;
  };
}

interface LoginError {
  type: typeof AUTH_ERROR;
  payload: {
    loading: boolean;
    message: string;
  };
}

export type AuthActionTypes = LoginSuccess | LogoutAction | LoginStart | LoginError;
