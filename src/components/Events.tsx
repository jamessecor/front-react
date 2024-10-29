import React from 'react';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import { MdFestival } from "react-icons/md";
import Event from './Event';
import { events } from '../data/events';

export const NavItemEvents = 'Events';

const Events = () => {
    const sortedEvents = events.sort((a, b) => a.date.getSeconds() - b.date.getSeconds());
    const futureEvents = sortedEvents.filter((event) => event.date >= new Date());
    const pastEvents = sortedEvents.filter((event) => event.date < new Date());

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
                    {'The Front gallery holds opening receptions every first Friday of the month. Other events including artist talks, poetry readings, celebrations, etc. will be listed below.'}
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Stack>
                    {futureEvents.length
                        ? (
                            <Typography variant={'h6'}>
                                {'Upcoming events'}
                            </Typography>
                        )
                        : null}
                    {futureEvents.map((event) => (
                        <Box key={event.title}>
                            <Divider sx={{ mb: 2 }} />
                            <Event
                                title={event.title}
                                date={event.date}
                                description={event.description}
                                image={event.image}
                                link={event.link}
                            />
                        </Box>
                    ))}
                    {pastEvents.length
                        ? (
                            <Typography variant={'h6'}>
                                {'Past events:'}
                            </Typography>
                        )
                        : null}
                    {pastEvents.map((event) => (
                        <Box key={event.title}>
                            <Divider sx={{ mb: 2 }} />
                            <Event
                                title={event.title}
                                date={event.date}
                                description={event.description}
                                image={event.image}
                                link={event.link}
                            />
                        </Box>
                    ))}
                </Stack>
            </Stack>
        </Container>
    )
};

export default Events;