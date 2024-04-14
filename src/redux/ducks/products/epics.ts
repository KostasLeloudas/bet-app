import { from, of, Observable } from 'rxjs';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import axios from 'axios';
import { Action } from '@reduxjs/toolkit';

import { fetchProducts, fetchProductsFailure, setProducts } from './slice';

export const handleFetchProducts = ( action$: Observable<Action> ) =>
  action$.pipe(
    filter( fetchProducts.match ),
    mergeMap( () =>
      from( axios.get( 'https://dummyjson.com/products' ) ).pipe(
        map( ( response ) => setProducts( response.data.products ) ),
        catchError( ( error ) => of( fetchProductsFailure( error.message ) ) )
      )
    )
  );
