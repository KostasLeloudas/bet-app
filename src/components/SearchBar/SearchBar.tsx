import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { searchCharacters, setCharacters } from '../../redux/ducks/character/slice';
import characters from '../../constants/mock-data.json';

// const filter = createFilterOptions<FilmOptionType>();

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>( '' );


  useEffect( () => {
    if ( value.length > 0 ) {
        console.log( 'foobar2', value )
        dispatch( searchCharacters(value) )
    }
  }, [value] );

  return (
    <Autocomplete
      value={value}
      onChange={( event, newValue ) => {
        console.log( 'foobar3', value )
        setValue(newValue!)
      }}
      options={[]}
      sx={{ width: 300, backgroundColor: 'white' }}
      renderInput={( params ) => (
        <TextField {...params} label="Free solo with text demo" />
      )}
    />
  );
};
