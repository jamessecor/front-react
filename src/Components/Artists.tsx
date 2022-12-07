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
                        <Grid item={true} alignItems={'center'} xs={12} md={2}>
                            <ButtonBase onClick={() => navigateTo(`/artists/${artist.paramName}`)}>
                                <img className={'artists-image'} width={'100%'} src={`${process.env.REACT_APP_URL}/images/artists/${artist.images[0]}`} />
                            </ButtonBase>
                            <Button variant={'text'} onClick={() => navigateTo(`/artists/${artist.paramName}`)}>
                                <Typography sx={{color: 'black'}}>
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
