import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IProductsSlice } from "./typings";

const initialState: IProductsSlice = {
  products: [],
};

export const productsSlice = createSlice( {
  name: "products",
  initialState,
  reducers: {
    /**
     * Trigers fetchProductsEpic to make api call.
     * @method fetchProducts
     * @category Actions
     */
    fetchProducts: () => {},

    /**
     * Directly set products value
     * @method setProducts
     * @category Actions
     */
    setProducts: ( state, action: PayloadAction<IProduct[]> ) => {
      state.products = action.payload;
    },

    /**
     * Adds additional products to the already existing ones
     * @method addProducts
     * @category Actions
     */
    addProducts: ( state, action: PayloadAction<IProduct[]> ) => {
      state.products = [...state.products, ...action.payload];
    },

    /**
     * Clears products array
     * @method clearBets
     * @category Actions
     */
    clearProducts: ( state ) => {
      state.products = [];
    },

    /**
     * Logs Error
     * @method fetchProductsFailure
     * @category Actions
     */
    fetchProductsFailure: ( _, action ) => {
      console.error( "foobar", action.payload );
    },
  },
} );

export const {
  fetchProducts,
  setProducts,
  addProducts,
  clearProducts,
  fetchProductsFailure,
} = productsSlice.actions;

export const products = productsSlice.reducer;
