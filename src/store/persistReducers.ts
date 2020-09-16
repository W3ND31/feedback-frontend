import { Action, Reducer } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export default (reducers: Reducer<unknown, Action<any>>) =>
  persistReducer({ key: "feedbackSystem", storage }, reducers);
