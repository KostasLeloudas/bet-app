import { of, throwError } from 'rxjs';
import { handleFetchExamples } from './epics';
import axios from 'axios';
import { fetchExample, fetchExampleFailure, setExample } from './slice';


// Mock axios.get
jest.mock( 'axios', () => ( {
  get: jest.fn(),
} ) );

describe( 'handleFetchExamples', () => {
  it( 'should fetch examples successfully', async () => {
    // arrange
    const action$ = of( fetchExample );
    const response = { data: { example: { id: 1, title: 'test' } } };
    const expectedOutput = setExample( response.data.example );
  
    jest.spyOn( axios, 'get' ).mockResolvedValueOnce( response );
    // act
    const output$ = handleFetchExamples( action$ );
    const result = await output$.toPromise();
    // assert
    expect( result ).toEqual( expectedOutput );
  } );

  it( 'should handle fetch failure', async () => {
    const action$ = of( fetchExample );
    const error = new Error( 'Failed to fetch examples' );
    const expectedOutput = fetchExampleFailure( error.message );
  
    jest.spyOn( axios, 'get' ).mockReturnValueOnce( throwError( error ).toPromise() ); // Convert Observable to Promise
  
    const output$ = handleFetchExamples( action$ );
    const result = await output$.toPromise();
  
    expect( result ).toEqual( expectedOutput );
  } );
} );
