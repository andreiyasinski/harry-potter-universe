import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import faculty from "./faculty.reducer";
import characters from './characters.reducer';
import cardAmount from './cardAmount.reducer';

const mainReducer = combineReducers({
  faculty,
  characters,
  cardAmount
})

export function initializeStore() {
  return createStore(mainReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
