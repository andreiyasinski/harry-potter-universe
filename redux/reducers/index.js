import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import faculty from "./faculty.reducer";
import characters from './characters.reducer';

const mainReducer = combineReducers({
  faculty,
  characters
})

export function initializeStore() {
  return createStore(mainReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
