import { combineReducers } from "redux";

import AuthReducer from "./AuthReducer";

const appReducer = combineReducers({
  AuthReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
