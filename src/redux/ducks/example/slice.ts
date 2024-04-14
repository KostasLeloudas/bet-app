import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Iexample, IExampleSlice } from './typings';

const initialState: IExampleSlice = {
  example: null,
};

export const exampleSlice = createSlice( {
  name: 'example',
  initialState,
  reducers: {
    /**
     * @method fetchExample
     * @category Actions
     */
    fetchExample: () => {},

    /**
     * @method setExample
     * @category Actions
     */
    setExample: ( state, action: PayloadAction<Iexample> ) => {
      state.example = action.payload;
    },

    /**
     * Logs Error
     * @method fetchExampleFailure
     * @category Actions
     */
    fetchExampleFailure: ( _, action ) => {
      console.error( "foobar", action.payload );
    },
  },
} );

export const { fetchExample, setExample, fetchExampleFailure } = exampleSlice.actions;

export const example = exampleSlice.reducer;
