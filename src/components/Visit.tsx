import * as React from 'react';
import { useMemo, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { artists } from '../data/artists';
import Stepper from './Stepper';
import { IArtist } from '../models/Artist';
import { useParams, useNavigate } from 'react-router-dom';
import useImages from '../hooks/useImages';
import { BsInstagram } from 'react-icons/bs';
import { Divider } from '@mui/material';

export const NavItemVisit = 'Contact Us / Visit';

const Visit = () => {

    return (
        <Grid justifyContent={'center'} container={true}>
            <Container>
                <Typography align={'center'} variant={'h3'} sx={{ pb: 4 }}>
                    {'Contact Us / Visit'}
                </Typography>
                <Grid
                    container={true}
                    xs={12}
                    item={true}
                    sx={{ display: 'flex', flexDirection: 'row' }}
                >
                    <Grid
                        item={true}
                        xs={12}
                        md={6}
                    >
                        <Typography variant={'h5'} sx={{ py: 1 }}>
                            {'Visit Us'}
                        </Typography>
                        <Typography variant={'body1'}>
                            {'If you would like to visit the gallery outside of our regular hours, and have no symptoms of illness, please contact us'}
                            <Button
                                onClick={() => window.open('mailto:info@thefrontvt.com')}
                                variant={'text'}
                                sx={{ textTransform: 'none', px: .5 }}
                            >
                                {'by email'}
                            </Button>
                            {'or phone'}
                            <Button
                                onClick={() => window.open('tel:8025520877')}
                                variant={'text'}
                                sx={{ textTransform: 'none', px: .5 }}
                            >
                                {'(802) 552-0877'}
                            </Button>
                            {'to set up an appointment.'}
                        </Typography>

                        <Divider sx={{ my: 5}} />

                        <Typography variant={'h5'} sx={{ pb: 1 }}>
                            {'Regular Hours:'}
                        </Typography>
                        <Typography variant={'body1'}>
                            <strong>{'Fridays: '}</strong>
                            {'4-7pm'}
                        </Typography>
                        <Typography variant={'body1'}>
                            <strong>{'Saturdays and Sundays: '}</strong>
                            {'11am - 5pm'}
                        </Typography>
                    </Grid>
                    <Grid
                        item={true}
                        justifyContent={'center'}
                        alignItems={'stretch'}
                        xs={12}
                        md={6}
                        sx={{ px: 2 }}
                    >
                        <img width={'100%'} src={`${process.env.PUBLIC_URL}/images/gallery/gallery-view.jpeg`} alt={'Visit Us'} />
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
};

export default Visit;
