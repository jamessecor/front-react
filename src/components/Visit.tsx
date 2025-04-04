import * as React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Divider, Stack } from '@mui/material';
import ContactForm from './modals/ContactForm';
import { PAYPAL_DONATE_LINK } from '../models/Paypal';
import { BiDonateHeart } from 'react-icons/bi';
import Hours from './Hours';
import useImages from '../hooks/useImages';

export const NavItemVisit = 'Contact Us / Visit';

const Visit = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const { getFullImagePath } = useImages();

    return (
        <Container maxWidth={'sm'}>
            <ContactForm isOpen={isContactFormOpen} setIsOpen={setIsContactFormOpen} />
            <Stack alignItems={'center'} justifyContent={'center'}>
                <Typography align={'center'} variant={'h3'} sx={{ pb: 4 }}>
                    {'Contact Us / Visit'}
                </Typography>

                <Typography variant={'h5'} sx={{ pb: 1 }}>
                    {'Come visit us in person!'}
                </Typography>
                <Typography variant={'body1'}>
                    {'The Front'}
                </Typography>
                <Button onClick={() => window.open('https://www.google.com/maps/place/The+Front/@44.2585667,-72.5762729,15z/data=!4m5!3m4!1s0x0:0x84e8aefc1ae5c0c1!8m2!3d44.2585667!4d-72.5762729')}>
                    {'6 Barre St, Montpelier, VT 05602'}
                </Button>

                <Divider sx={{ my: 3 }} />
                <Hours />

                <Button
                    onClick={() => setIsContactFormOpen(true)}
                    variant={'contained'}
                    sx={{
                        width: { xs: '100%', sm: '50%' },
                        mt: 1
                    }}
                >
                    {'Join our mailing list'}
                </Button>

                <Divider sx={{ my: 3 }} />

                <Typography variant={'h5'} sx={{ py: 1 }}>
                    {'Unable to Visit During Regular Hours?'}
                </Typography>
                <Typography variant={'body1'}>
                    {'If you would like to visit the gallery outside of our regular hours, please contact us by email'}
                    <Button
                        onClick={() => window.open('mailto:info@thefrontvt.com')}
                        variant={'text'}
                        sx={{ textTransform: 'none', px: .5 }}
                    >
                        {'info@thefrontvt.com'}
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

                <Divider sx={{ my: 3 }} />

                <Typography variant={'h5'} sx={{ py: 1 }}>
                    {'Donate'}
                </Typography>
                <Typography variant={'body1'} alignItems={'center'} sx={{ display: 'flex', flexDirection: 'column' }}>
                    {'If you would like to make a donation to The Front, use the link below. We appreciate your generosity and look forward to seeing you soon. Thank you!'}
                    <Button
                        onClick={() => window.open(PAYPAL_DONATE_LINK)}
                        variant={'contained'}
                        sx={{
                            width: { xs: '100%', sm: '50%' },
                            mt: 1
                        }}
                    >
                        <BiDonateHeart />
                        <Box sx={{ pl: 1 }}>{'Donate'}</Box>
                    </Button>
                </Typography>
                <Divider sx={{ display: { md: 'none' }, my: 5 }} />
                <img
                    alt={'Visit Us'}
                    src={getFullImagePath('gallery-view.jpeg', 'gallery')}
                    style={{
                        width: '100vw',
                        height: '100vh',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: -1,
                        opacity: 0.2,
                        objectFit: 'contain'
                    }}
                />
            </Stack>
        </Container>
    );
};

export default Visit;
