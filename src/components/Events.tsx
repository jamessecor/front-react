import React from 'react';
import { Container, Divider, Stack, Typography } from '@mui/material';
import { MdFestival } from "react-icons/md";
import Event from './Event';
import { events } from '../data/events';

export const NavItemEvents = 'Events';

const Events = () => {
    return (
        <Container maxWidth={'sm'}>
            <Stack alignItems={'center'}>
                <MdFestival size={133} />
                <Typography
                    variant={'h3'}
                    sx={{
                        paddingBottom: 2
                    }}
                >
                    {'Events'}
                </Typography>
                <Typography variant={'body1'}>
                    {'The Front gallery holds opening receptions every first Friday of the month. Other events including artists\' talks, poetry readings, celebrations, etc. will be listed below.'}
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Stack>
                    {events.map((event) => (
                        <Event
                            title={event.title}
                            description={event.description}
                            images={event.images}
                            link={event.link}
                        />
                    ))}
                </Stack>
            </Stack>
        </Container>
    )
};

export default Events;