import React from 'react';
import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import { MdFestival } from "react-icons/md";
import Event from './Event';
import { events } from '../data/events';
import useImages from '../hooks/useImages';
import usePagination from '../hooks/usePagination';

export const NavItemEvents = 'Events';

const Events = () => {
    const today = new Date();
    
    // Separate future and past events
    const futureEvents = events
        .filter((event) => event.date >= today)
        .sort((a, b) => a.date.getTime() - b.date.getTime());
        
    const pastEvents = events
        .filter((event) => event.date < today)
        .sort((a, b) => b.date.getTime() - a.date.getTime());

    // Use pagination for both future and past events
    const {
        paginatedItems: displayedFutureEvents,
        hasMore: hasMoreFutureEvents,
        loadMore: loadMoreFutureEvents,
        showAll: showAllFutureEvents
    } = usePagination(futureEvents, { initialItemsPerPage: 5, incrementBy: 5 });

    const {
        paginatedItems: displayedPastEvents,
        hasMore: hasMorePastEvents,
        loadMore: loadMorePastEvents,
        showAll: showAllPastEvents
    } = usePagination(pastEvents, { initialItemsPerPage: 5, incrementBy: 5 });

    const { getFullImagePath } = useImages();

    return (
        <Container maxWidth={'md'}>
            <img
                src={getFullImagePath('featured.jpg', 'events')}
                style={{
                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    opacity: 0.1,
                    objectFit: 'contain'
                }}
            />
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
                    {displayedFutureEvents.length > 0 && (
                        <>
                            <Typography variant={'h4'} sx={{ mt: 2, mb: 2 }}>
                                Upcoming Events
                            </Typography>
                            {displayedFutureEvents.map((event) => (
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
                            {hasMoreFutureEvents && (
                                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                                    <Button 
                                        variant="outlined" 
                                        onClick={loadMoreFutureEvents}
                                    >
                                        Load More Upcoming
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        onClick={showAllFutureEvents}
                                    >
                                        Show All Upcoming
                                    </Button>
                                </Box>
                            )}
                        </>
                    )}

                    {displayedPastEvents.length > 0 && (
                        <>
                            <Typography variant={'h4'} sx={{ mt: 4, mb: 2 }}>
                                Past Events
                            </Typography>
                            {displayedPastEvents.map((event) => (
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
                            {hasMorePastEvents && (
                                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2, mb: 4 }}>
                                    <Button 
                                        variant="outlined" 
                                        onClick={loadMorePastEvents}
                                    >
                                        Load More Past Events
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        onClick={showAllPastEvents}
                                    >
                                        Show All Past Events
                                    </Button>
                                </Box>
                            )}
                        </>
                    )}
                </Stack>
            </Stack>
        </Container>
    )
};

export default Events;