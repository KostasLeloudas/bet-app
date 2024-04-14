import { TAppState } from '../../typings';

export const selectProducts = ( state: TAppState ) => state.products.products ?? [];

export const selectProductById = ( state: TAppState, productId: number ) =>
  state.products.products.filter( ( product ) => product.id === productId )[0]!;
