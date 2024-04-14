import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing'; // Import TestScheduler for RxJS testing
import axios from 'axios'; // Import axios for mocking
import { handleFetchProducts } from './epics'; // Import the function to test
import { fetchProducts, setProducts, fetchProductsFailure } from './slice'; // Import the actions

// Mock axios
jest.mock( 'axios' );

describe( 'handleFetchProducts', () => {
  it( 'dispatches the correct actions on successful fetch', () => {
    const testScheduler = new TestScheduler( ( actual, expected ) => {
      // Assert the output actions
      expect( actual ).toEqual( expected );
    } );

    // Create a mock response data
    const responseData = { products: [
        {
            id: 1,
            title: 'string',
            description: 'string',
            price: 11,
            discountPercentage: 1,
            rating: 4,
            stock: 1,
            brand: 'string',
            category: 'string',
            thumbnail: 'string',
            images: ['string']
        }
    ]};

    // Configure axios to return a fake response
    const mockAxiosGet = axios.get;
    // mockAxiosGet.mockResolvedValueOnce( { data: responseData } );

    // Create a mock action$ observable
    const action$ = of( fetchProducts() );

    testScheduler.run( ( { expectObservable } ) => {
      // Call the handleFetchProducts function
      const result$ = handleFetchProducts( action$ );

      // Expect the correct actions to be dispatched
      expectObservable( result$ ).toBe( '(ab|)', {
        a: setProducts( responseData.products ),
        b: fetchProductsFailure( 'Error message' ), // Assuming this is the error action
      } );
    } );
  } );
} );
