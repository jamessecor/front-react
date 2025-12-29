import React, { useCallback } from 'react';
import { IImage } from '../models/Artist';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Stack,
    Typography
} from '@mui/material';
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


const Event: React.FC<IEvent> = ({ title, date, description, image, link }) => {
    const navigateTo = useNavigate();
    const { getFullImagePath } = useImages();

    const followLink = useCallback((link: ILink) => {
        if (!link) return;
        return link.type === 'internal'
            ? navigateTo(link.url)
            : window.open(link.url, '_blank');
    }, [navigateTo]);

    const handleCardClick = useCallback(() => {
        if (link) {
            followLink(link);
        }
    }, [link, followLink]);

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                height: '100%',
                '&:hover': {
                    boxShadow: 3,
                },
            }}
        >
            {image && (
                <CardMedia
                    component="img"
                    sx={{
                        width: { xs: '100%', md: 250 },
                        height: 250,
                        objectFit: 'cover',
                        transform: image.scale ? `scale(${image.scale})` : 'none',
                        objectPosition: image.position || 'center',
                    }}
                    image={getFullImagePath(image.src, image.directory || 'events')}
                    alt={image.text || title}
                />
            )}

            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6" gutterBottom>
                        {title}
                    </Typography>
                    {date && (
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                            {new Date(date).toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: '2-digit',
                            })}
                        </Typography>
                    )}
                    <Stack spacing={1}>
                        {description.map((descriptionLine, index) => (
                            <Typography
                                key={`${index}-${descriptionLine.substring(0, 15)}`}
                                variant="body2"
                                component="div"
                                sx={{ '& p': { margin: 0 } }}
                                dangerouslySetInnerHTML={{ __html: descriptionLine }}
                            />
                        ))}
                    </Stack>
                </CardContent>
                {link && (
                    <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
                        <Button
                            size="small"
                            color="primary"
                            onClick={() => followLink(link)}
                        >
                            {link.text}
                        </Button>
                    </CardActions>
                )}
            </Box>
        </Card>
    );
};

export default Event;
