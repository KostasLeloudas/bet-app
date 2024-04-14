import { from, of, Observable } from 'rxjs';
import { filter, map, catchError, switchMap } from 'rxjs/operators';
import { Action } from '@reduxjs/toolkit';
import axios from 'axios';

import { fetchExample, fetchExampleFailure, setExample } from './slice';

export const handleFetchExamples = ( action$: Observable<Action> ) =>
  action$.pipe(
    filter( fetchExample.match ),
    switchMap( () =>
      from( axios.get( 'https://dummyjson.com/products' ) ).pipe(
        map( ( response ) => setExample( response.data.example ) ),
        catchError( ( error ) => of( fetchExampleFailure( error.message ) ) )
      )
    )
  );
