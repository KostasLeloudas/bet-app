import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import * as exampleEpics from './ducks/example/epics';

const epicMiddleware = createEpicMiddleware();

/** Note: Get rid of this any */
const epics: any[] = [exampleEpics.handleFetchExamples];

export const store = configureStore( {
  reducer: rootReducer,
  middleware: [epicMiddleware]
} );

export const registerEpics = () => epicMiddleware.run( combineEpics( ...epics ) );

registerEpics();

export default store;
