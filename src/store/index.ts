import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import AuthReducer from "./auth/AuthReducer";
import { AuthState } from "./auth/types";

const appReducer = combineReducers({
  AuthReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export interface RootState {
  AuthReducer: AuthState;
}

export { store };
