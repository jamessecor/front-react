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
    const { getShowImagesByName, getFullImagePath, getShowByName } = useImages();

    const show = getShowByName(name ?? '');
    const thisShowImages = useMemo(() => getShowImagesByName(name ?? ''), [name]);

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
                    sm={6}
                    md={3}
                    sx={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Typography align={'center'} variant={'h3'} sx={{ color: 'black' }}>
                        {show?.displayName}
                    </Typography>
                    {
                        thisShowImages.map((image) => (
                            <img src={getFullImagePath(image.src)} />
                        ))
                    }
                </Grid>
            </Grid>
            <Button onClick={() => navigateTo('/shows')}>
                <BiArrowBack />{'Back to shows'}
            </Button>
        </Container>
    )

};

export default Show;
