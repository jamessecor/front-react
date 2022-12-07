import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { artists } from '../data/artists';
import Stepper from './Stepper';

export const NavItemArtists = 'Artists';

const Artists = () => {
    const navigateTo = useNavigate();

    return (
        <Container>
            <Grid justifyContent={'center'} container={true} spacing={2}>
                {artists.map((artist) => {
                    return (
                        <Grid item={true} xs={12} md={2}>
                            <ButtonBase onClick={() => navigateTo(`/artists/${artist.paramName}`)}>
                                <img style={{borderRadius: '10px'}} width={'100%'} src={`http://localhost:3000/images/artists/${artist.images[0]}`} />
                                <Typography position={'fixed'} noWrap={true} sx={{color: 'white', background: 'rgba(100, 100, 100, .4)'}}>
                                    {artist.name}
                                </Typography>
                            </ButtonBase>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    )

};

export default Artists;
