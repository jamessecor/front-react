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
  const { currentShowImagesForHomePage, getFullImagePath, getShowByName } = useImages();

  const currentShow = getShowByName(process.env.REACT_APP_CURRENT_SHOW ?? '');
  return (
    <Container>
      <Typography variant={'h3'}>
        {currentShow?.displayName}
      </Typography>
      {
        currentShowImagesForHomePage.length > 1 ? (
          <Stepper images={currentShowImagesForHomePage} />
        ) : (
          currentShowImagesForHomePage.map((image) => (
            <img className={'image-home'} src={getFullImagePath(image.src)} />
          ))
        )
      }
    </Container>
  )
}

export default Home;