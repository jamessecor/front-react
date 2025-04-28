import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useImages from '../hooks/useImages';
import { useNavigate } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Hours from './Hours';

export const NavItemHome = 'Home';

const Home = () => {
  const { getFullImagePath, currentShow, currentShowFeaturedImage } = useImages();
  const navigateTo = useNavigate();
  const today = new Date();

  return (
    <Container maxWidth={'md'}>
      <Typography textAlign={'center'} variant={'h6'}>
        {currentShow.startDate && currentShow.startDate <= today
          ? 'Currently on view at the Front: '
          : `Opening ${currentShow.startDate?.toLocaleDateString('en-us', { weekday: 'long', month: 'long', day: 'numeric' })}`}
      </Typography>
      <Stack alignItems={'center'} direction={'column'}>
        <ButtonBase onClick={() => navigateTo(`/shows/${currentShow.name}`)}>
          <Stack alignItems={'center'} direction={'column'}>
            {currentShow?.superDisplayName
              ? (
                <Typography align={'center'} variant={'h5'}>
                  {currentShow?.superDisplayName}
                </Typography>
              )
              : null}
            <Typography textAlign={'center'} variant={'h4'}>
              {currentShow.displayName}
            </Typography>
            <img
              className={'image-rounded'}
              src={getFullImagePath(currentShowFeaturedImage?.src ?? '', 'shows')}
              style={{
                width: '100%'
              }}
            />
            {currentShowFeaturedImage?.text
              ? (
                <Typography variant={'body2'}>
                  {currentShowFeaturedImage.text}
                </Typography>
              ) : null}
            <Link textAlign={'center'} variant={'body1'} sx={{ py: 1 }}>
              {'Click to see more'}
            </Link>
          </Stack>
        </ButtonBase>
      </Stack>
      <Hours alignment={'center'} />
    </Container>
  )
}

export default Home;