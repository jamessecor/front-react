import * as React from 'react';
import { useMemo, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { artists } from '../data/artists';
import Stepper from './Stepper';
import { useParams, useNavigate } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { GoBrowser } from 'react-icons/go';
import { RxOpenInNewWindow } from 'react-icons/rx';
import Tooltip from '@mui/material/Tooltip';
import { BiArrowBack } from 'react-icons/bi';
import useImages from '../hooks/useImages';

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
        <Container>
            {artist && (
                <React.Fragment>
                    <Grid
                        container={true}
                        justifyContent={'center'}
                        alignItems={'stretch'}
                        size={12}
                        sx={{ pr: 2, display: 'flex', flexDirection: 'column' }}
                    >
                        <Grid justifyContent={'center'} sx={{ display: 'flex' }}>
                            <Button onClick={() => navigateTo('/artists')}>
                                <BiArrowBack />{'Back to artists'}
                            </Button>
                        </Grid>
                        <Grid justifyContent={'center'} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography align={'center'} variant={'h3'} sx={{ px: 2 }}>
                                <Box>{artist.name}</Box>
                            </Typography>
                            <Stack alignSelf={'center'} direction={'row'}>
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
                            </Stack>
                        </Grid>
                    </Grid>
                    <Divider sx={{ mb: 2 }} />
                    <Grid
                        container={true}
                        size={12}
                        sx={{ display: 'flex', flexDirection: 'row' }}
                    >
                        <Grid
                            justifyContent={'center'}
                            alignItems={'stretch'}
                            size={{
                                xs: 12,
                                md: 6
                            }}
                            sx={{ pr: 2 }}
                        >
                            <Stepper images={artist.images} />
                        </Grid>
                        <Grid
                            size={{
                                xs: 12,
                                md: 6
                            }}
                        >
                            <Box sx={{ my: 3, display: { xs: 'block', md: 'none' } }} />
                            <Stack>
                                {artist.bio && (
                                    artist.bio.map((bioItem) => (
                                        <Typography
                                            key={bioItem.substring(0, 15)}
                                            sx={{ pb: 2 }}
                                            variant={'body1'}
                                        >
                                            {/* ONLY HARD-CODED SAFE HTML */}
                                            <div dangerouslySetInnerHTML={{ __html: bioItem }} />
                                        </Typography>
                                    ))
                                )}
                                {artist.videos && (
                                    artist.videos.map((video) => (
                                        <Box key={video.src}>
                                            <video
                                                src={getFullImagePath(video.src, 'artists')}
                                                width={'100%'}
                                                autoPlay={true}
                                                loop={true}
                                                muted={true}
                                            />
                                        </Box>
                                    ))
                                )}
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid
                        container={true}
                        justifyContent={'space-between'}
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
                </React.Fragment>
            )}
        </Container>
    )
};

export default Artist;
