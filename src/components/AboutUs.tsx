import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Divider, Grid2 } from '@mui/material';
import Stepper from './Stepper';
import { historyImages } from '../data/history';

export const NavItemAboutUs = 'About Us';

const AboutUs = () => (
    <Grid2 justifyContent={'center'} container={true}>
        <Container>
            <Typography align={'center'} variant={'h3'} sx={{ pb: 4 }}>
                {'About Us'}
            </Typography>
            <Grid2
                container={true}
                justifyContent={'center'}
                size={12}
                sx={{ display: 'flex', flexDirection: 'row' }}
            >
                <Grid2
                    size={{
                        xs: 12,
                        md: 7
                    }}
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
                </Grid2>
            </Grid2>
        </Container>
    </Grid2>
);

export default AboutUs;
