import React, { useCallback } from 'react';
import { IImage } from '../models/Artist';
import { Button, Stack, Typography } from '@mui/material';
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
            {image
                ? <img width={'100%'} src={getFullImagePath(image.src, 'events')} alt={image.text ?? 'Image unavailable'} />
                : null}
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
                        onClick={() => followLink(link)}
                    >
                        {link.text}
                    </Button>
                )
                : null}
        </Stack>
    );
};

export default Event;
