import React from "react";
import { Action } from "redux";
import { AUTH_ERROR, AUTH_LOGIN, AUTH_LOGIN_START, AUTH_LOGOUT } from "../actions/types";

const INITIAL_STATE = {
  username: null,
  authenticated: false,
};

const AuthReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case AUTH_LOGIN_START:
      return { ...state, ...action.payload };
    case AUTH_LOGIN:
      return { ...state, ...action.payload, authenticated: true };
    case AUTH_ERROR:
      return {
        ...state,
        ...action.payload,
        authenticated: false,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        username: null,
        authenticated: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
