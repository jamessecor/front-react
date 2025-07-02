import React, { useCallback } from 'react';
import { IImage } from '../models/Artist';
import { Box, Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';
import useImages from '../hooks/useImages';

interface ILink {
    type: 'external' | 'internal';
    text: string;
    url: string;
}

export interface IEvent {
    title: string;
    date: Date;
    description: Array<string>;
    image?: IImage;
    link?: ILink;
}


const Event: React.FC<IEvent> = ({ title, description, image, link }) => {
    const navigateTo = useNavigate();
    const { getFullImagePath } = useImages();
    const followLink = useCallback((link: ILink) => link?.type === 'internal'
        ? navigateTo(link?.url)
        : window.open(link?.url, '_blank')
        , [link]);

    return (
        <Stack>
            <Typography variant={'h6'}>
                {title}
            </Typography>
            <Grid
                container={true}
                gap={1}
            >
                <Grid size={{ xs: 12, md: 4 }}>
                    {image
                        ? (
                            <img
                                width={'100%'}
                                src={getFullImagePath(image.src, image.directory ? image.directory : 'events')}
                                alt={image.text ?? 'Image unavailable'}
                                style={{
                                    transform: image.scale ? `scale(${image.scale})` : '',
                                    objectPosition: image.position ?? ''
                                }}
                            />
                        )
                        : null}
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Stack gap={1}>
                        {description.map((descriptionLine) => (
                            <Typography key={descriptionLine.substring(0, 15)}>
                                {/* ONLY HARD-CODED SAFE HTML */}
                                <div dangerouslySetInnerHTML={{ __html: descriptionLine }} />
                            </Typography>
                        ))}
                    </Stack>
                    {link
                        ? (
                            <Button
                                variant={'text'}
                                onClick={() => followLink(link)}
                            >
                                {link.text}
                            </Button>
                        )
                        : null}
                </Grid>
            </Grid>
        </Stack>
    );
};

export default Event;
