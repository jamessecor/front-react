import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { artists } from '../data/artists';
import Stepper from './Stepper';
import './Artists.css';

export const NavItemArtists = 'Artists';

const Artists = () => {
    const navigateTo = useNavigate();

    return (
        <Container>
            <Grid justifyContent={'center'} container={true} spacing={2}>
                {artists.map((artist) => {
                    return (
                        <Grid
                            item={true}
                            justifyContent={'center'}
                            alignItems={'stretch'}
                            xs={12}
                            sm={4}
                            md={2}
                            sx={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <ButtonBase onClick={() => navigateTo(`/artists/${artist.paramName}`)}>
                                <img className={'artists-image'} src={`${process.env.REACT_APP_URL}/images/artists/${artist.images[0]}`} />
                            </ButtonBase>
                            <Button
                                variant={'text'}
                                onClick={() => navigateTo(`/artists/${artist.paramName}`)}
                            >
                                <Typography sx={{ color: 'black' }}>
                                    {artist.name}
                                </Typography>
                            </Button>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    )

};

export default Artists;