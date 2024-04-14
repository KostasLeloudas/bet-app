import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import * as productEpics from './ducks/products/epics';

const epicMiddleware = createEpicMiddleware();

const epics: ( typeof productEpics.handleFetchProducts )[] = [productEpics.handleFetchProducts];

export const store = configureStore( {
  reducer: rootReducer,
  middleware: [epicMiddleware]
} );

export const registerEpics = () => epicMiddleware.run( combineEpics( ...epics ) );

registerEpics();

export default store;
