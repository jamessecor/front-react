import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useImages from '../hooks/useImages';
import { useNavigate } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Hours from './Hours';
import { Divider, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { events } from '../data/events';
import { MdEvent } from 'react-icons/md';

export const NavItemHome = 'Home';

const Home = () => {
  const { getFullImagePath, currentShow, currentShowFeaturedImage } = useImages();
  const navigateTo = useNavigate();
  const today = new Date();

  // Get next 2 upcoming events
  const upcomingEvents = events
    .filter(event => event.date >= today)
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 3);

  return (
    <Container maxWidth={'md'}>
      <Typography textAlign={'center'} variant={'h6'}>
        {currentShow.startDate && currentShow.startDate <= today
          ? 'Currently on view at the Front: '
          : `Opening ${currentShow.startDate?.toLocaleDateString('en-us', { weekday: 'long', month: 'long', day: 'numeric' })}`}
      </Typography>
      <Stack alignItems={'center'} direction={'column'}>
        <Stack alignItems={'center'} direction={'column'}>
          {currentShow?.superDisplayName
            ? (
              <Typography align={'center'} variant={'h5'}>
                {currentShow?.superDisplayName}
              </Typography>
            )
            : null}
          <Typography textAlign={'center'} variant={'h4'}>
            {currentShow.displayName}
          </Typography>
          {currentShow.descriptionBold
            ? (
              currentShow.descriptionBold.map((line, index, array) => (
                <Stack key={line}>
                  <Typography align={'center'} variant={'h6'}>
                    {line}
                  </Typography>
                  {index !== array.length - 1 ? <Divider variant={'middle'} /> : null}
                </Stack>
              )))
            : null}
          <ButtonBase onClick={() => navigateTo(`/shows/${currentShow.name}`)}>
            <Stack>
              <img
                src={getFullImagePath(currentShowFeaturedImage?.src ?? '', 'shows')}
                style={{
                  width: '100%'
                }}
              />
              {currentShowFeaturedImage?.text
                ? (
                  <Typography variant={'body2'}>
                    {currentShowFeaturedImage.text}
                  </Typography>
                )
                : null}
              <Link textAlign={'center'} variant={'body1'} sx={{ py: 1 }}>
                {'Click to see more'}
              </Link>
            </Stack>
          </ButtonBase>
        </Stack>
      </Stack>
      <Hours alignment={'center'} />

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <Box sx={{ mt: 6, mb: 4 }}>
          <Divider sx={{ my: 4 }} />
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3, justifyContent: 'center' }}>
            <MdEvent size={28} />
            <Typography variant="h5" component="h2">
              Upcoming Events
            </Typography>
          </Stack>

          <Stack spacing={3}>
            {upcomingEvents.map((event, index) => (
              <Card key={index} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                {event.image && (
                  <CardMedia
                    component="img"
                    sx={{ width: { xs: '100%', md: 200 }, height: 200, objectFit: 'cover' }}
                    image={getFullImagePath(event.image.src, event.image.directory)}
                    alt={event.title}
                  />
                )}
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                      {event.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      {event.date.toLocaleDateString('en-us', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit'
                      })}
                    </Typography>
                    {event.description && event.description[0] && (
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {event.description[0].replace(/<[^>]*>?/gm, '')}
                      </Typography>
                    )}
                  </CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => navigateTo('/events')}
                    >
                      View All Events
                    </Button>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => navigateTo('/events')}
              sx={{ mt: 2 }}
            >
              View All Events
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  )
}

export default Home;