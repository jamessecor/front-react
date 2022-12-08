import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stepper from './Stepper';
import useImages from '../hooks/useImages';
import './Home.css';

export const NavItemHome = 'Home';

const Home = () => {
  const { currentShowImagesForHomePage, getFullImagePath } = useImages();
  return (
    <Container>
      <Typography variant={'h3'}>
        {`${process.env.REACT_APP_CURRENT_SHOW} - on view now`}
      </Typography>
      {
        currentShowImagesForHomePage.length > 1 ? (
          <Stepper images={currentShowImagesForHomePage.map((image) => getFullImagePath(image.src))} />
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