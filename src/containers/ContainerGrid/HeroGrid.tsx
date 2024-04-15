import { useEffect } from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import characters from '../../constants/mock-data.json';
import { HeroCard } from '../../components/HeroCard/HeroCard';
import { useSelector } from 'react-redux';
import { selectCharacters } from '../../redux/ducks/character/selectors';
import './HeroGrid.scss';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export const HeroGrid = () => {
  const characters = useSelector( selectCharacters );
    
  return (
    <Box sx={{ width: '100%', mt:2 }} className='hero-grid-container'>
      <Grid className='hero-grid' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
        {
          characters.map( ( character ) => (
            <HeroCard character={character} />
          ) )
        }
      </Grid>
    </Box>
  );
};