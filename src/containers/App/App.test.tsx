import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import App from './App';

describe( '<App />', () => {
  it( 'should render the app div', () => {
    render( <App /> );

    const app = screen.getByTestId( 'app-div' );

    expect( app ).toBeInTheDocument();
  } );
} );
