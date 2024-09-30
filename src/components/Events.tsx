import React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { MdConstruction } from "react-icons/md";

export const NavItemEvents = 'Events';

const Events = () => {
    return (
        <Container maxWidth={'sm'}>
            <Stack alignItems={'center'}>
                <MdConstruction size={133} />
                <Typography
                    variant={'body1'}
                    sx={{
                        paddingBottom: 2
                    }}
                >
                    {'This page is under construction.'}
                </Typography>
                <Typography variant={'body1'}>
                    {'For now, you should know that there are openings every first Friday of the month. Often during solo shows, the artist will hold some sort of event resembling an artist\'s talk, and we sometimes have other events such as poetry readings or panel discussions.'}
                </Typography>
            </Stack>
        </Container>
    )
};

export default Events;