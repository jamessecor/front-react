import React from 'react';
import { Box, IconButton, Snackbar, SnackbarCloseReason } from '@mui/material';
import { FaTimes } from 'react-icons/fa';

interface IBannerProps {
    message: string;
}

const Banner: React.FC<IBannerProps> = ({ message }) => {
    const [open, setOpen] = React.useState(true);
    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            onClose={handleClose}
            message={message}
            sx={{
                '& .MuiSnackbarContent-root': {
                    backgroundColor: 'warning.light',
                    color: 'black',
                },
            }}
            action={(
                <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={handleClose}
                >
                    <FaTimes />
                </IconButton>
            )}
        />
    );
};

export default Banner;