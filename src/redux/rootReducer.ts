import { combineReducers } from "redux";
import { products } from "./ducks/products/slice";

const rootReducer = combineReducers( {
  products,
} );

export default rootReducer;
