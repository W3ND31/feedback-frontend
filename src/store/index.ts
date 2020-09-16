import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import AuthReducer from "./auth/AuthReducer";
import { AuthState } from "./auth/types";
import persistReducers from "./persistReducers";


export interface RootState {
  AuthReducer: AuthState;
}

const appReducer = combineReducers({
  AuthReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(persistReducers(rootReducer), composeEnhancers(applyMiddleware(thunk)));

const persister = persistStore(store);

export { store, persister };
