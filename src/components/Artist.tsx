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
                    <Grid
                        container={true}
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
                            <Typography align={'center'} variant={'h3'}>
                                <Box>{artist.name}</Box>
                            </Typography>
                        </Grid>
                        <Grid
                            container={true}
                            item={true}
                            justifyContent={'center'}
                            alignItems={'center'}
                            xs={12}
                            md={6}
                        >
                            <Grid item={true}>
                                {artist.instagram && (
                                    <Button sx={{ py: 0 }} variant={'text'} onClick={() => window.open(artist.instagram?.link)}>
                                        <Typography sx={{ textTransform: 'none' }}>
                                            {'Instagram: '}
                                        </Typography>
                                        <Typography variant={'h6'} sx={{ px: 1 }}>
                                            <BsInstagram />
                                        </Typography>
                                        <Typography sx={{ textTransform: 'none' }}>
                                            {artist.instagram.handle}
                                        </Typography>
                                    </Button>
                                )}
                                <Grid item={true}>
                                    {artist.website && (
                                        <Button sx={{ py: 0 }} variant={'text'} onClick={() => window.open(artist.website)}>
                                            <Typography sx={{ textTransform: 'none' }}>
                                                {'Website: '}
                                            </Typography>
                                            <Typography variant={'h6'} sx={{ px: 1 }}>
                                                <GoBrowser />
                                            </Typography>
                                        </Button>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
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
