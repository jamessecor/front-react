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
import { Stack } from '@mui/material';
import usePagination from '../hooks/usePagination';

export const NavItemShows = 'Shows';

const Shows = () => {
    const navigateTo = useNavigate();
    const { getFullImagePath } = useImages();
    const {
        paginatedItems: displayedShows,
        hasMore,
        loadMore,
        showAll
    } = usePagination(shows, { initialItemsPerPage: 8, incrementBy: 8 });

    return (
        <Container>
            <Grid justifyContent={'center'} container={true} spacing={2}>
                {displayedShows.map((show) => {
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
                                    <img
                                        className={'image-rounded'}
                                        src={getFullImagePath(show.featuredImage.src ?? '', 'shows')}
                                        style={{
                                            width: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
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
                {hasMore && (
                    <Grid
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
                        <Stack direction={'row'} gap={2}>
                            <Button
                                variant={'outlined'}
                                onClick={loadMore}
                            >
                                Load More Past Shows
                            </Button>
                            <Button
                                variant={'contained'}
                                onClick={showAll}
                            >
                                Show All Past Shows
                            </Button>
                        </Stack>
                    </Grid>
                )}
            </Grid>
        </Container>
    )

};

export default Shows;
