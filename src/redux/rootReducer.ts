import { combineReducers } from "redux";
import { example } from "./ducks/example/slice";

const rootReducer = combineReducers( {
  example,
} );

export default rootReducer;
