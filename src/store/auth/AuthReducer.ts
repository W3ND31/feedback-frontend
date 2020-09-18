import { AuthActionTypes, AuthState, AUTH_ERROR, AUTH_LOGIN_START, AUTH_LOGOUT, AUTH_SUCCESS } from "./types";

const INITIAL_STATE: AuthState = {
  user: {
    username: "",
  },
  authenticated: false,
  loading: false,
  message: "",
};

const AuthReducer = (state = INITIAL_STATE, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case AUTH_LOGIN_START:
      return { ...state, ...action.payload };
    case AUTH_SUCCESS:
      return { ...state, ...action.payload, authenticated: true };
    case AUTH_ERROR:
      return {
        ...state,
        ...action.payload,
        authenticated: false,
      };
    case AUTH_LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default AuthReducer;
