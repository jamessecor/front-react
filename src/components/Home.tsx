import * as React from 'react';
import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stepper from './Stepper';
import useImages from '../hooks/useImages';
import { shows } from '../data/shows';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';

export const NavItemHome = 'Home';

const Home = () => {
  const { getFullImagePath, currentShow, currentShowFeaturedImage } = useImages();
  const navigateTo = useNavigate();

  return (
    <Container>
      <Typography textAlign={'center'} variant={'h6'}>
        {'Currently on view at the Front: '}
      </Typography>
      <ButtonBase onClick={() => navigateTo(`/shows/${currentShow.name}`)}>
        <Stack direction={'column'}>
          <Typography textAlign={'center'} variant={'h3'}>
            {currentShow?.displayName}
          </Typography>
          <img className={'image-home'} src={getFullImagePath(currentShowFeaturedImage?.src ?? '', 'shows')} />
        </Stack>
      </ButtonBase>
    </Container>
  )
}

export default Home;