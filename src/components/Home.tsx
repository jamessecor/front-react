import * as React from 'react';
import { useMemo }from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stepper from './Stepper';
import useImages from '../hooks/useImages';
import { shows } from '../data/shows';
import './Home.css';

export const NavItemHome = 'Home';

const Home = () => {
  const { getFullImagePath, currentShow, currentShowFeaturedImage } = useImages();

  return (
    <Container>
      <Typography variant={'h3'}>
        {currentShow?.displayName}
      </Typography>
      <img className={'image-home'} src={getFullImagePath(currentShowFeaturedImage?.src ?? '', 'shows')} />
    </Container>
  )
}

export default Home;