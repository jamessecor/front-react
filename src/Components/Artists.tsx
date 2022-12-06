import Box from '@mui/material/Box';
import * as React from 'react';

const artists = ['Glen', 'James', 'Melora']

export const NavItemArtists = 'Artists';

const Artists = () => {
    return (
        <Box>
            {artists.map((artist) => {
                return <div>{'artist'}</div>;
            })}
        </Box>
    )

};

export default Artists;
