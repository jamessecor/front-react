import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Stepper from './Stepper';
import './Artists.css';
import useImages from '../hooks/useImages';
import { BiArrowBack } from 'react-icons/bi';
import { Box, Divider, Stack } from '@mui/material';

const Show = () => {
    const { name } = useParams();
    const navigateTo = useNavigate();
    const { getFullImagePath, getShowByName } = useImages();

    const show = getShowByName(name ?? '');

    useEffect(() => {
        if (show === null) {
            navigateTo('/shows');
        }
    }, [show]);

    return (
        <Container>
            <Grid justifyContent={'center'} container={true} spacing={2}>
                <Grid
                    justifyContent={'center'}
                    alignItems={'stretch'}
                    size={12}
                    sx={{ display: 'flex', flexDirection: 'column', pb: 2 }}
                >
                    <Button onClick={() => navigateTo('/shows')}>
                        <BiArrowBack />{'Back to shows'}
                    </Button>
                    {show?.superDisplayName
                        ? (
                            <Typography align={'center'} variant={'h5'}>
                                {show?.superDisplayName}
                            </Typography>
                        )
                        : null}
                    <Typography align={'center'} variant={'h4'}>
                        {show?.displayName}
                    </Typography>
                </Grid>
                <Grid
                    container={true}
                    sx={{ display: 'flex', flexDirection: 'row' }}
                >
                    {show?.featuredImage && (
                        <Grid
                            size={{
                                xs: 12,
                                md: 4
                            }}
                        >
                            <img className={'image-rounded'} width={'100%'} src={getFullImagePath(show.featuredImage.src, 'shows')} />
                        </Grid>
                    )}
                    <Grid
                        size={{
                            xs: 12,
                            md: 8
                        }}
                        sx={{ pl: 3 }}
                    >
                        {show?.descriptionBold?.map((paragraph) => (
                            <Typography
                                key={paragraph.substring(10)}
                                variant={'body1'}
                                sx={{ pb: 2, fontWeight: 'bold' }}
                            >
                                {paragraph}
                            </Typography>
                        ))}
                        {show?.description?.map((paragraph) => (
                            <Typography
                                key={paragraph.substring(10)}
                                variant={'body1'}
                                sx={{ pb: 2 }}
                            >
                                {/* ONLY HARD-CODED SAFE HTML */}
                                <div dangerouslySetInnerHTML={{ __html: paragraph }}></div>
                            </Typography>
                        ))}
                        {show?.artistParamName
                            ? (
                                <Button
                                    onClick={() => navigateTo(`/artists/${show.artistParamName}`)}
                                    sx={{ paddingX: 0 }}
                                >
                                    <Typography variant={'body1'}>
                                        {'More about the artist'}
                                    </Typography>
                                </Button>
                            )
                            : null}
                    </Grid>
                </Grid>
                <Grid direction={'row'}>
                    {show?.images?.length && (
                        <Grid
                            justifyContent={'center'}
                            alignItems={'stretch'}
                            size={12}
                            sx={{ pr: 2 }}
                        >
                            <Stepper
                                images={show.images}
                                imageFolder='shows'
                                numberToDisplay={2.2}
                                spacing={45}
                            />
                        </Grid>
                    )}
                    {show?.videos?.map((video) => (
                        <Grid
                            key={video.src}
                            sx={{
                                padding: 2
                            }}
                        >
                            {video.type === 'YouTube'
                                ? (
                                    <iframe
                                        width={'100%'}
                                        height={'355px'}
                                        src={video.src}
                                        title={video.text}
                                        allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'}
                                        referrerPolicy={'strict-origin-when-cross-origin'}
                                        allowFullScreen={true}
                                    />
                                )
                                : (

                                    <video
                                        controls={true}
                                        src={video.src}
                                        width={'100%'}
                                        height={'355px'}
                                        autoPlay={true}
                                        loop={true}
                                        muted={true}
                                    />
                                )}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
    )

};

export default Show;
