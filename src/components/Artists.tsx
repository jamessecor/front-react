import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { artists } from '../data/artists';
import './Artists.css';
import Box from '@mui/material/Box';

export const NavItemArtists = 'Artists';

const Artists = () => {
    const navigateTo = useNavigate();

    return (
        <Container>
            <Grid justifyContent={'center'} container={true} spacing={2}>
                {artists.filter(artist => !artist.isNotMember).map((artist) => (
                    <Grid
                        item={true}
                        justifyContent={'center'}
                        xs={4}
                        md={2.25}
                        lg={1.6}
                        sx={{ display: 'flex', flexDirection: 'column' }}
                    >
                        <ButtonBase onClick={() => navigateTo(`/artists/${artist.paramName}`)}>
                            {artist.images.length
                                ? (
                                    <Box className={'artists-image-wrapper'}>
                                        <img
                                            className={'artists-image'}
                                            style={{ transform: artist.images[0].scale ? `scale(${artist.images[0].scale})` : '' }}
                                            alt={'no image available'}
                                            src={`${process.env.REACT_APP_URL}/images/artists/${artist.images[0].src}`}
                                        />
                                    </Box>
                                )
                                : <Box className={`artists-image`} sx={{ backgroundColor: 'lightblue' }} />
                            }
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
                ))}
            </Grid>
        </Container>
    )

};

export default Artists;
