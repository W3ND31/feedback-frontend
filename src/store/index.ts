import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import AuthReducer from "./auth/AuthReducer";
import { AuthState } from "./auth/types";
import persistReducers from "./persistReducers";
import SnackbarReducer from "./snackbar/SnackbarReducer";
import { SnackBarState } from "./snackbar/types";

export interface RootState {
  AuthReducer: AuthState;
  SnackbarReducer: SnackBarState;
}

const appReducer = combineReducers({
  AuthReducer,
  SnackbarReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "AUTH_LOGOUT") {
    storage.removeItem("persist:root");
    state = undefined;
  }

  return appReducer(state, action);
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(persistReducers(rootReducer), composeEnhancers(applyMiddleware(thunk)));

const persister = persistStore(store);

export { store, persister };
