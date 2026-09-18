import { Modal, Box, Grid2 as Grid, Typography, ButtonBase, Button, TextField, CircularProgress, Drawer, Stack } from "@mui/material";
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

interface IApplicationHelperProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const modalContentsStyle = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '75%', sm: 400 },
    bgcolor: 'background.paper',
    border: '2px solid #ccc',
    borderRadius: '6px',
    boxShadow: 24,
    p: 4,
};

const ApplicationHelper: React.FC<IApplicationHelperProps> = ({ isOpen, setIsOpen }) => {
    return (
        <Drawer
            open={isOpen}
            onClose={() => setIsOpen(false)}
        >
            {/* <Box sx={modalContentsStyle}> */}
            <Stack>
                <Typography>{'Welcome to your application helper'}</Typography>

            </Stack>
        </Drawer>
    );
}

export default ApplicationHelper;