import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { shows } from '../data/shows';
import './Artists.css';
import useImages from '../hooks/useImages';

export const NavItemShows = 'Shows';

const Shows = () => {
    const navigateTo = useNavigate();
    const { getFullImagePath } = useImages();

    return (
        <Container>
            <Grid justifyContent={'center'} container={true} spacing={2}>
                {shows.map((show) => {
                    return (
                        <Grid
                            key={show.number}
                            justifyContent={'center'}
                            alignItems={'stretch'}
                            size={{
                                xs: 12,
                                sm: 6,
                                md: 3
                            }}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            {show.featuredImage && (
                                <ButtonBase onClick={() => navigateTo(`/shows/${show.name}`)}>
                                    <img className={'image-home image-rounded'} src={getFullImagePath(show.featuredImage.src ?? '', 'shows')} />
                                </ButtonBase>
                            )}
                            <Button
                                variant={'text'}
                                onClick={() => navigateTo(`/shows/${show.name}`)}
                            >
                                <Typography sx={{ color: 'black' }}>
                                    {show.displayName}
                                </Typography>
                            </Button>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    )

};

export default Shows;
