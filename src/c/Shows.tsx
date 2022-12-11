import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { artists } from '../data/artists';
import { shows } from '../data/shows';
import Stepper from './Stepper';
import './Artists.css';
import useImages from '../hooks/useImages';

export const NavItemShows = 'Shows';

const Shows = () => {
    const navigateTo = useNavigate();
    const { currentShowImages, getFullImagePath } = useImages();

    return (
        <Container>
            <Grid justifyContent={'center'} container={true} spacing={2}>
                {shows.map((show) => {
                    return (
                        <Grid
                            item={true}
                            justifyContent={'center'}
                            alignItems={'stretch'}
                            xs={12}
                            sm={6}
                            md={3}
                            sx={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <ButtonBase onClick={() => navigateTo(`/shows/${show.name}`)}>
                                {
                                    currentShowImages.map((image) => (
                                        <img className={'image-home'} src={getFullImagePath(image.src)} />
                                    ))
                                }
                            </ButtonBase>
                            <Button
                                variant={'text'}
                                onClick={() => navigateTo(`/shows/${show.name}`)}
                            >
                                <Typography sx={{ color: 'black' }}>
                                    {show.displayName}
                                </Typography>
                            </Button>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    )

};

export default Shows;
