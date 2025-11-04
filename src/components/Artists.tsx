import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography, alpha } from '@mui/material';
import { artists } from '../data/artists';

export const NavItemArtists = 'Artists';

const Artists = () => {
    const navigateTo = useNavigate();

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Grid container spacing={3}>
                {artists.filter(artist => !artist.isNotMember).map((artist) => (
                    <Grid item key={artist.paramName} xs={6} sm={4} md={3} lg={2.4}>
                        <Card 
                            sx={{ 
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 2,
                                overflow: 'hidden',
                                boxShadow: 2,
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 4
                                }
                            }}
                        >
                            <CardActionArea 
                                onClick={() => navigateTo(`/artists/${artist.paramName}`)}
                                sx={{ 
                                    flexGrow: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'stretch'
                                }}
                            >
                                <Box sx={{ 
                                    position: 'relative',
                                    width: '100%',
                                    pt: '100%', // 1:1 aspect ratio
                                    overflow: 'hidden'
                                }}>
                                    <CardMedia
                                        component="img"
                                        image={artist.thumbnail ? `${import.meta.env.VITE_URL}/images/artists/${artist.thumbnail.src}` : ''}
                                        alt={artist.name}
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transform: artist.thumbnail?.scale ? `scale(${artist.thumbnail.scale})` : 'none',
                                            objectPosition: artist.thumbnail?.position || 'center',
                                            transition: 'transform 0.5s ease',
                                            '&:hover': {
                                                transform: artist.thumbnail?.scale 
                                                    ? `scale(${artist.thumbnail.scale * 1.05})` 
                                                    : 'scale(1.05)'
                                            }
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.7))',
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            p: 2
                                        }}
                                    >
                                        <Typography 
                                            variant="subtitle1" 
                                            color="white" 
                                            fontWeight="medium"
                                            sx={{
                                                textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                                                textAlign: 'center',
                                                width: '100%'
                                            }}
                                        >
                                            {artist.name}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Artists;