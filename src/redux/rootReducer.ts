import { combineReducers } from "redux";
import { characters } from "./ducks/character/slice";

const rootReducer = combineReducers( {
  characters,
} );

export default rootReducer;
