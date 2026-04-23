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
import { IShow } from '../models/Show';
import { IImage } from '../models/Artist';
import Event from './Event';

interface IShowCard {
  show: IShow;
  featuredImage: IImage | undefined;
}

export const NavItemHome = 'Home';

const Home = () => {
  const { getFullImagePath, currentShow, currentShowFeaturedImage, nextShow, nextShowFeaturedImage } = useImages();
  const navigateTo = useNavigate();
  const today = new Date();

  // Get next 2 upcoming events
  const upcomingEvents = events
    .filter(event => event.date >= today)
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 3);

  return (
    <Container maxWidth={'md'} sx={{ py: 4 }}>
      {/* Current Show Section */}
      <Box sx={{ mb: 6 }}>
        <Typography textAlign={'center'} variant={'h5'} component="h1" sx={{ mb: 3 }}>
          {currentShow.startDate && currentShow.startDate <= today
            ? 'Currently on view at the Front: '
            : `Opening ${currentShow.startDate?.toLocaleDateString('en-us', { weekday: 'long', month: 'long', day: 'numeric' })}:`}
        </Typography>
        <ShowCard show={currentShow} featuredImage={currentShowFeaturedImage} />
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Hours alignment={'center'} />
        </Box>
      </Box>

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
              <Event
                title={event.title}
                date={event.date}
                description={event.description}
                image={event.image}
                link={event.link}
              />
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

      {/* Next show if there is one */}
      {nextShow
        ? (
          <Stack>
            <Divider sx={{ my: 4 }} />
            <Typography textAlign={'center'} variant={'h5'} component="h1" sx={{ mb: 3 }}>
              {'Up Next in the Gallery'}
            </Typography>
            <ShowCard show={nextShow} featuredImage={nextShowFeaturedImage} />
          </Stack>
        )
        : null}
    </Container>
  )
}

const ShowCard = ({ show, featuredImage }: IShowCard) => {
  const navigateTo = useNavigate();
  const { getFullImagePath } = useImages();
  return (
    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 4 }}>
      {featuredImage?.src && (
        <CardMedia
          component="img"
          sx={{
            width: { xs: '100%', md: 300 },
            height: { xs: 250, md: 'auto' },
            objectFit: 'cover'
          }}
          image={getFullImagePath(featuredImage.src, 'shows')}
          alt={show.displayName}
        />
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent>
          {show?.superDisplayName && (
            <Typography variant="h6" gutterBottom>
              {show.superDisplayName}
            </Typography>
          )}

          <Typography variant="h4" component="h2" gutterBottom>
            {show.displayName}
          </Typography>

          {show.descriptionBold?.map((line, index) => (
            <Stack
              key={index}
              divider={<Divider sx={{ my: 1 }} />}
            >
              <Typography variant="h6" component="p">
                {line}
              </Typography>
            </Stack>
          ))}

          {featuredImage?.text && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {featuredImage.text}
            </Typography>
          )}
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2, mt: 'auto' }}>
          <Button
            size="small"
            color="primary"
            onClick={() => navigateTo(`/shows/${show.name}`)}
          >
            View Exhibition Details
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default Home;