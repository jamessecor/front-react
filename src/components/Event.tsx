import React from 'react';
import { IImage } from '../models/Artist';
import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export interface IEvent {
    title: string;
    description: Array<string>;
    images: Array<IImage>;
    link: {
        type: string;
        text: string;
        relativeUrl: string;
    }
}

const Event: React.FC<IEvent> = ({ title, description, images, link }) => {
    const navigateTo = useNavigate();
    return (

        <Stack>
            <Typography variant={'h6'}>
                {title}
            </Typography>
            {description.map((descriptionLine) => (
                <Typography key={descriptionLine.substring(0, 15)}>
                    {/* ONLY HARD-CODED SAFE HTML */}
                    <div dangerouslySetInnerHTML={{ __html: descriptionLine }} />
                </Typography>
            ))}
            {link
                ? (
                    <Button
                        variant={'text'}
                        onClick={() => navigateTo(link.relativeUrl)}
                    >
                        {link.text}
                    </Button>
                )
                : null}
        </Stack>
    );
};

export default Event;
