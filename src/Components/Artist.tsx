import * as React from 'react';
import { useMemo, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { artists } from '../data/artists';
import Stepper from './Stepper';
import { IArtist } from '../models/Artist';
import { useParams, useNavigate } from 'react-router-dom';

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
        <Container>
            <Grid justifyContent={'center'} container={true}>
                {artist && (
                    <Grid xs={12} md={6} item={true}>
                        <Typography align={'center'} variant={'h3'}>
                            {artist.name}
                        </Typography>
                        <Stepper images={artist.images.map((image) => `${process.env.REACT_APP_URL}/images/artists/${image}`)} />
                    </Grid>
                )}
            </Grid>
        </Container>
    )
};

export default Artist;
