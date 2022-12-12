import * as React from 'react';
import { useMemo, useEffect } from 'react';
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

export const NavItemVisit = 'Contact Us / Visit';

const Visit = () => {

    return (
        <Grid justifyContent={'center'} container={true}>
            <Container>
                <Typography align={'center'} variant={'h3'}>
                    {'Visit Us'}
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
                        md={8}
                    >
                        <img src={'visit-us.jpg goes here'} alt={'Visit Us'} />
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
};

export default Visit;
