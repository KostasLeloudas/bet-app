import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacterSlice } from './typings';
import { Character } from '../../../constants/character.model';
// import { Iexample, IExampleSlice } from './typings';

const initialState: ICharacterSlice = {
  characters: [],
  searchTerm: '',
};

export const charactersSlice = createSlice( {
  name: 'characters',
  initialState,
  reducers: {
    /**
     * @method setCharacters
     * @category Actions
     */
    setCharacters: ( state, action: PayloadAction<Character[]> ) => {
      console.log( 'foobar1', action.payload )
      state.characters = action.payload;
    },

    /**
     * @method searchCharacters
     * @category Actions
     */
    searchCharacters: ( state, action: PayloadAction<string> ) => {
      state.searchTerm = action.payload;
    },
  },
} );

export const { setCharacters, searchCharacters } = charactersSlice.actions;

export const characters = charactersSlice.reducer;
