import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Grid, Typography, Dialog, DialogContent, Card, CardMedia, CardContent } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '200px',
}));

const Events = () => {
  const [events, setEvents] = useState([]);
  const [expandedEvent, setExpandedEvent] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod', {
        params: {
          api_key: 'G6MQhXqXJf4OOBBehEQre3BsHijIV0bsG0gVhTt7',
          count: 9,
          hd: true,
        },
      })
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching NASA events:', error);
      });
  }, []);

  const handleCardClick = (event) => {
    setExpandedEvent(event);
  };

  const handleClose = () => {
    setExpandedEvent(null);
  };

  return (
    <Box
      id="events"
      style={{
        backgroundColor: 'black',
        width: '100%',
        minHeight: '100vh',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.6rem',
          textDecoration: 'none',
          fontSize: '2rem',
          color: 'white',
          marginTop: '7rem',
          marginBottom: '2rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        Recent Space Events
      </h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, sm: 8, md: 12 }}
      >
        {events.map((event) => (
          <Grid item xs={2} sm={4} md={4} key={event.date}>
            <Item
              onClick={() => handleCardClick(event)}
              sx={{
                cursor: 'pointer',
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={event.url}
                alt={event.title}
              />
              <CardContent>
                <Typography variant="h5">{event.title}</Typography>
                <Typography variant="body2">Date: {event.date}</Typography>
              </CardContent>
            </Item>
          </Grid>
        ))}
      </Grid>

      {/* Expanded Event View */}
      <Dialog open={!!expandedEvent} onClose={handleClose} maxWidth="md">
        <DialogContent>
          {expandedEvent && (
            <div>
              <Typography variant="h5">{expandedEvent.title}</Typography>
              <Typography variant="body2">Date: {expandedEvent.date}</Typography>
              <img
                src={expandedEvent.url}
                alt={expandedEvent.title}
                style={{ maxWidth: '100%' }}
              />
              <Typography variant="body2">{expandedEvent.explanation}</Typography>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Events;
