import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import faculty from "./faculty.reducer";

const mainReducer = combineReducers({
  faculty
})

export function initializeStore() {
  return createStore(mainReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
