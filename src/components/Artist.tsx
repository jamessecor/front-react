import * as React from 'react';
import { useMemo, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { artists } from '../data/artists';
import Stepper from './Stepper';
import { useParams, useNavigate } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { GoBrowser } from 'react-icons/go';
import { RxOpenInNewWindow } from 'react-icons/rx';
import Tooltip from '@mui/material/Tooltip';

export const NavItemArtists = 'Artists';

const Artist = () => {
    const { name } = useParams();
    const navigateTo = useNavigate();

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
                        item={true}
                        justifyContent={'center'}
                        alignItems={'stretch'}
                        xs={12}
                        md={6}
                        sx={{ pr: 2, display: 'flex' }}
                    >
                        <Typography align={'center'} variant={'h3'} sx={{ px: 2 }}>
                            <Box>{artist.name}</Box>
                        </Typography>
                        {artist.instagram && (
                            <ButtonBase sx={{ p: 0 }} onClick={() => window.open(artist.instagram?.link)}>
                                <Tooltip arrow={true} title={artist.instagram.handle} placement={'top'}>
                                    <Typography variant={'h6'} sx={{ px: 1 }}>
                                        <BsInstagram />
                                    </Typography>
                                </Tooltip>
                            </ButtonBase>
                        )}
                        {artist.website && (
                            <ButtonBase onClick={() => window.open(artist.website)}>
                                <Tooltip arrow={true} title={artist.website} placement={'top'}>
                                    <Typography variant={'h6'} sx={{ px: 1 }}>
                                        <GoBrowser />
                                    </Typography>
                                </Tooltip>
                            </ButtonBase>
                        )}
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
                            <Stepper images={artist.images} />
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Box sx={{ my: 3, display: { xs: 'block', md: 'none' } }} />
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
                    <Grid
                        justifyContent={'space-between'}
                        item={true}
                        sx={{ display: { sx: 'inline', md: 'flex' } }}
                    >
                        {artist.instagram && (
                            <Button sx={{ py: 0 }} variant={'text'} onClick={() => window.open(artist.instagram?.link)}>
                                <Typography sx={{ pr: 1, textTransform: 'none' }}>
                                    {'Instagram:'}
                                </Typography>
                                <Typography sx={{ textTransform: 'none' }}>
                                    {artist.instagram.handle}
                                </Typography>
                                <Typography sx={{ pl: 1 }}>
                                    <RxOpenInNewWindow />
                                </Typography>
                            </Button>
                        )}
                        {artist.website && (
                            <Button sx={{ py: 0 }} variant={'text'} onClick={() => window.open(artist.website)}>
                                <Typography align={'center'} sx={{ pr: 1, textTransform: 'none' }}>
                                    {'Website:'}
                                </Typography>
                                <Typography sx={{ textTransform: 'none' }}>
                                    {artist.website}
                                </Typography>
                                <Typography sx={{ pl: 1 }}>
                                    <RxOpenInNewWindow />
                                </Typography>
                            </Button>
                        )}
                    </Grid>
                </Container>
            )}
        </Grid>
    )
};

export default Artist;
