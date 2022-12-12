import * as React from 'react';
import { useMemo, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { artists } from '../data/artists';
import Stepper from './Stepper';
import { IArtist } from '../models/Artist';
import { useParams, useNavigate } from 'react-router-dom';
import useImages from '../hooks/useImages';
import { BsInstagram } from 'react-icons/bs';
import { GoBrowser } from 'react-icons/go';

export const NavItemArtists = 'Artists';

const Artist = () => {
    const { name } = useParams();
    const navigateTo = useNavigate();
    const { getFullImagePath } = useImages();

    const filteredArtists = useMemo(() => artists.filter((artist) => artist.paramName === name), [artists]);
    const artist = useMemo(() => filteredArtists.length ? filteredArtists[0] : null, [filteredArtists]);

    useEffect(() => {
        if (!artist) {
            navigateTo('/artists');
        }
    });

    return (
        <Grid justifyContent={'center'} container={true}>
            {artist && (
                <Container>
                    <Typography align={'center'} variant={'h3'}>
                        <Box>{artist.name}</Box>
                        {artist.instagram && (
                            <Button variant={'text'} onClick={() => window.open(artist.instagram?.link)}>
                                <Typography variant={'h6'} sx={{ pr: 1 }}>
                                    <BsInstagram />
                                </Typography>
                                <Typography sx={{ textTransform: 'none' }}>
                                    {artist.instagram.handle}
                                </Typography>
                            </Button>
                        )}
                        {artist.website && (
                            <Button variant={'text'} onClick={() => window.open(artist.website)}>
                                <Typography variant={'h6'} sx={{ pr: 1 }}>
                                    <GoBrowser />
                                </Typography>
                                <Typography sx={{ textTransform: 'none' }}>
                                    {artist.website}
                                </Typography>
                            </Button>
                        )}
                    </Typography>

                    <Grid
                        container={true}
                        xs={12}
                        item={true}
                        sx={{ display: 'flex', flexDirection: 'row' }}
                    >
                        <Grid
                            item={true}
                            justifyContent={'center'}
                            alignItems={'stretch'}
                            xs={12}
                            md={6}
                            sx={{ pr: 2 }}
                        >
                            <Stepper images={artist.images.map((image) => getFullImagePath(image))} />
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            {artist.bio && (
                                artist.bio.map((bioItem) => (
                                    <Typography
                                        sx={{ pb: 2 }}
                                        variant={'body1'}
                                    >
                                        {/* ONLY HARD-CODED SAFE HTML */}
                                        <div dangerouslySetInnerHTML={{ __html: bioItem }}></div>
                                    </Typography>
                                ))
                            )}
                        </Grid>
                    </Grid>
                </Container>
            )}
        </Grid>
    )
};

export default Artist;
