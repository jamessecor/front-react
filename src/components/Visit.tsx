import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import ContactForm from './modals/ContactForm';

export const NavItemVisit = 'Contact Us / Visit';

const Visit = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    return (
        <Grid justifyContent={'center'} container={true}>
            <ContactForm isOpen={isContactFormOpen} setIsOpen={setIsContactFormOpen} />
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
                        <Typography variant={'h5'} sx={{ pb: 1 }}>
                            {'Come visit us in person!'}
                        </Typography>
                        <Typography variant={'body1'}>
                            {'The Front'}
                        </Typography>
                        <Button onClick={() => window.open('https://www.google.com/maps/place/The+Front/@44.2585667,-72.5762729,15z/data=!4m5!3m4!1s0x0:0x84e8aefc1ae5c0c1!8m2!3d44.2585667!4d-72.5762729')}>
                            {'6 Barre St, Montpelier, VT 05602'}
                        </Button>

                        <Divider sx={{ my: 5 }} />

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
                        <Button onClick={() => setIsContactFormOpen(true)}>
                            {'Join our mailing list'}
                        </Button>

                        <Divider sx={{ my: 5 }} />

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
