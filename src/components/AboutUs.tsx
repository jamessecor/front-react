import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';
import ContactForm from './modals/ContactForm';
import { PAYPAL_DONATE_LINK } from '../models/Paypal';
import { BiDonateHeart } from 'react-icons/bi';
import Hours from './Hours';
import Stepper from './Stepper';
import { historyImages } from '../data/history';

export const NavItemAboutUs = 'About Us';

const AboutUs = () => (
    <Grid justifyContent={'center'} container={true}>
        <Container>
            <Typography align={'center'} variant={'h3'} sx={{ pb: 4 }}>
                {'About Us'}
            </Typography>
            <Grid
                container={true}
                xs={12}
                item={true}
                justifyContent={'center'}
                sx={{ display: 'flex', flexDirection: 'row' }}
            >
                <Grid
                    item={true}
                    xs={12}
                    md={7}
                >
                    <Typography variant={'body1'}>
                        {'The Front is an artist-run cooperative gallery in Montpelier, Vermont. Through exhibitions, events, and activities, members provoke curiosity and community engagement with visual art.'}
                    </Typography>

                    <Divider sx={{ my: 5 }} />

                    <Typography
                        variant={'body1'}
                        sx={{ mb: 2 }}
                    >
                        {'The Front was established in 2015 and continues to evolve as members come and go over the years. Here are some images from our early years.'}
                    </Typography>

                    <Stepper
                        images={historyImages}
                        imageFolder='gallery/history'
                        numberToDisplay={2.2}
                        spacing={45}
                    />
                    {/* <Divider sx={{ my: 5 }} />

                    <Typography textAlign={'center'} variant={'h5'} sx={{ pb: 1 }}>
                        {'Equity'}
                    </Typography>
                    <Typography variant={'body1'}>
                        {'The Front is a cooperative gallery, founded on cooperative ideals. We believe that art and the collective nature of our gallery membership can be medium for social change. It is in this spirit that we make a purposeful commitment to Equity through:'}
                    </Typography>
                    <Typography variant={'body1'} sx={{ mt: 2 }}>
                        <Typography fontWeight={'bold'}>
                            {'Acknowledgment:'}
                        </Typography>
                        {'We acknowledge the Abenaki Nation and the unceded land that our gallery and the members who comprise the Front reside and make art upon. We also acknowledge that inequity exists among classes, races, ages, abilities, genders, and sexual orientations within our culture.'}
                    </Typography>
                    <Typography variant={'body1'} sx={{ mt: 2 }}>
                        <Typography fontWeight={'bold'}>
                            {'Accountability:'}
                        </Typography>
                        {'We hold ourselves as a collective accountable to our commitment to address these inequities by educating ourselves on systems of oppression and how they are enacted within the Front, the art world, and within our community, taking deliberate actions toward a more equitable future for all.'}
                    </Typography>
                    <Typography variant={'body1'} sx={{ mt: 2 }}>
                        <Typography fontWeight={'bold'}>
                            {'Action:'}
                        </Typography>
                        {'We have formed an Equity Committee to continue to look at the ways the Front can increase our equitable impact at large. We continue to discern what we have to offer our community in terms of our membership policies and procedures, addressing visibility of artists of color and partnering with other art organizations to increase outreach towards marginalized communities and create offerings which address reparation and equity for all.'}
                    </Typography> */}
                </Grid>
            </Grid>
        </Container>
    </Grid>
);

export default AboutUs;
