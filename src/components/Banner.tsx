import React from 'react';
import { Snackbar, SnackbarCloseReason, Alert } from '@mui/material';

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
        >
            <Alert
                onClose={handleClose}
                severity="info"
                variant="filled"
            >
                <div dangerouslySetInnerHTML={{ __html: message }} />
            </Alert>
        </Snackbar>
    );
};

export default Banner;