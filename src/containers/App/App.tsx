import React, { useEffect } from 'react';
import { HeroGrid } from '../ContainerGrid/HeroGrid';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useDispatch } from 'react-redux';
import characters from '../../constants/mock-data.json';
import './App.scss';
import { setCharacters } from '../../redux/ducks/character/slice';

function App() {
  // const dispatch = useDispatch();

  // useEffect( () => {
  //   dispatch( setCharacters(characters?.characters) )
  // }, [] );

  return (
      <div className="App">
        <SearchBar />
        <HeroGrid />
      </div>
  );
}

export default App;
