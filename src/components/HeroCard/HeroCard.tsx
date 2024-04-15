import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { Character } from '../../constants/character.model';

interface IActionAreaCardProps {
    character: Character;
}
export const HeroCard = ( {character}: IActionAreaCardProps ) => {
  return (
    <Grid item xs={6}>
        <Card sx={{ maxWidth: 345 }}>
            <div className='hero-name'>{character.name}</div>
            <img className='hero-img' src={character.image?.url} alt={`${character.name}-img`} />
        </Card>
    </Grid>
  );
};