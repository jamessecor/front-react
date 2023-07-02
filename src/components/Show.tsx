import * as React from 'react';
import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { artists } from '../data/artists';
import { shows } from '../data/shows';
import Stepper from './Stepper';
import './Artists.css';
import useImages from '../hooks/useImages';
import { BiArrowBack } from 'react-icons/bi';

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
                    item={true}
                    justifyContent={'center'}
                    alignItems={'stretch'}
                    xs={12}
                    sx={{ display: 'flex', flexDirection: 'column', pb: 2 }}
                >
                    <Button onClick={() => navigateTo('/shows')}>
                        <BiArrowBack />{'Back to shows'}
                    </Button>
                    <Typography align={'center'} variant={'h4'} sx={{ color: 'black' }}>
                        {show?.displayName}
                    </Typography>
                </Grid>
                <Grid
                    item={true}
                    container={true}
                    sx={{ display: 'flex', flexDirection: 'row' }}
                >
                    {show?.featuredImage && (
                        <Grid
                            item={true}
                            xs={12}
                            md={4}
                        >
                            <img width={'100%'} src={getFullImagePath(show.featuredImage.src, 'shows')} />
                        </Grid>
                    )}
                    {show?.description?.length && (
                        <Grid
                            item={true}
                            xs={12}
                            md={8}
                            sx={{ pl: 3 }}
                        >
                            {show.description.map((paragraph) => (
                                <Typography
                                    key={paragraph.substring(10)}
                                    variant={'body1'}
                                    sx={{ pb: 2 }}
                                >
                                    {/* ONLY HARD-CODED SAFE HTML */}
                                    <div dangerouslySetInnerHTML={{ __html: paragraph }}></div>
                                </Typography>
                            ))}
                        </Grid>
                    )}

                </Grid>
                {show?.images?.length && (
                    <Grid
                        item={true}
                        justifyContent={'center'}
                        alignItems={'stretch'}
                        xs={12}
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
            </Grid>
        </Container>
    )

};

export default Show;
