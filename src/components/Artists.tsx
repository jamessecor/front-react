import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid2';
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
                        key={artist.paramName}
                        justifyContent={'center'}
                        size={{
                            xs: 4,
                            md: 2.25,
                            lg: 1.6
                        }}
                        sx={{ display: 'flex', flexDirection: 'column' }}
                    >
                        <ButtonBase onClick={() => navigateTo(`/artists/${artist.paramName}`)}>
                            {artist.thumbnail
                                ? (
                                    <Box className={'artists-image-wrapper'}>
                                        <img
                                            className={'artists-image'}
                                            style={{
                                                transform: artist.thumbnail.scale ? `scale(${artist.thumbnail.scale})` : '',
                                                objectPosition: artist.thumbnail.position ?? ''
                                            }}
                                            alt={'no image available'}
                                            src={`${import.meta.env.VITE_URL}/images/artists/${artist.thumbnail.src}`}
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
