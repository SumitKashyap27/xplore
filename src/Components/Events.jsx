import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Grid, Typography, Dialog, DialogContent, Card, CardMedia, CardContent } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Error from './Error'; // Import your Error component
import Loader from './Loader'; // Import your Loader component

const Item = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '200px',
}));

const Events = () => {
  const [events, setEvents] = useState([]);
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); 

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod', {
        params: {
          api_key:'G6MQhXqXJf4OOBBehEQre3BsHijIV0bsG0gVhTt7',
          count: 100,
          hd: true,
        },
      })
      .then((response) => {
        setEvents(response.data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching NASA events:', error);
        setError(true); 
        setLoading(false);
      });
  }, []);

  const handleCardClick = (event) => {
    setExpandedEvent(event);
  };

  const handleClose = () => {
    setExpandedEvent(null);
  };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor:'black'
  };

  return (
    <Box
      id="events"
      style={containerStyle}
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
      {loading ? (
        <Loader /> 
      ) : error ? (
        <Error message="Error fetching NASA events" />
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 6, sm: 8, md: 12 }}
        >
          {events.map((event) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={event.date}>
              <Item
                onClick={() => handleCardClick(event)}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  width: '85%',
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  width="10"
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
      )}

      {/* Expanded Event View */}
      <Dialog open={!!expandedEvent} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          {expandedEvent && (
            <div>
              <Typography variant="h4" style={{ marginBottom: '1rem' }}>{expandedEvent.title}</Typography>
              <Typography variant="body2" style={{ marginBottom: '1rem' }}>Date: {expandedEvent.date}</Typography>
              <img
                src={expandedEvent.url}
                alt={expandedEvent.title}
                style={{ maxWidth: '100%', marginBottom: '1rem' }}
              />
              <Typography variant="body1">{expandedEvent.explanation}</Typography>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Events;
