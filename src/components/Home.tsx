import * as React from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useImages from '../hooks/useImages';
import { useNavigate } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import './Home.css';
import Link from '@mui/material/Link';
import Hours from './Hours';

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
          <Link textAlign={'center'} variant={'body1'} sx={{ py: 1 }}>
            {'Click to see more'}
          </Link>
        </Stack>
      </ButtonBase>
      <Hours alignment={'center'} />
    </Container>
  )
}

export default Home;