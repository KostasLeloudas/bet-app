import { from, of, Observable, interval } from 'rxjs';
import { filter, map, catchError, switchMap, tap, throttle, debounce } from 'rxjs/operators';
import { Action } from '@reduxjs/toolkit';
import axios from 'axios';
import { searchCharacters, setCharacters } from './slice';
import { setExample } from '../example/slice';
import characters from '../../../constants/mock-data.json';

// import { fetchExample, fetchExampleFailure, setExample } from './slice';

export const handleSearchCharacters = ( action$: Observable<Action> ) =>
  action$.pipe(
    filter( searchCharacters.match ),
    // debounce( () => interval(1000)  ),
    map( ( action ) => {
        const chars = characters.characters.filter( (character) => character.name.includes( action.payload ) )
        return setCharacters( chars )
    } ),
  );
