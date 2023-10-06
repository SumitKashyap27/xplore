import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

const MarsRoverGallery = () => {
  const [mediaData, setMediaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch data from a specific Mars rover (e.g., 'curiosity')
    axios
      .get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
        params: {
          api_key: 'G6MQhXqXJf4OOBBehEQre3BsHijIV0bsG0gVhTt7',
          sol: 1000, // Specify the Martian sol
          page: 1, // Specify the page number
        },
      })
      .then((response) => {
        setMediaData(response.data.photos);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching NASA media data:', error);
        setError(true);
        setLoading(false);
      });
  }, []);

  const mediaCardStyle = {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '10px',
    padding: '1rem',
  };

  return (
    <Box
      id="marsRoverGallery"
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black', // Black background
      }}
    >
      <h1 style={{ textAlign: 'center', color: 'white' }}>Mars Rover Gallery</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching media data</p>
      ) : (
        <Grid container spacing={2} justifyContent="center">
          {mediaData.map((media) => (
            <Grid item xs={12} sm={6} md={4} key={media.id}>
              <Card sx={mediaCardStyle}>
                {media.media_type === 'image' ? (
                  <CardMedia
                    component="img"
                    height="200"
                    image={media.img_src}
                    alt={`Image from Curiosity Rover on Sol ${media.sol}`}
                  />
                ) : (
                  <iframe
                    title={`Video from Curiosity Rover on Sol ${media.sol}`}
                    width="100%"
                    height="200"
                    src={media.img_src}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                )}
                <CardContent>
                  <Typography variant="body2">
                    Sol: {media.sol}
                  </Typography>
                  <Typography variant="body2">
                    Earth Date: {media.earth_date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default MarsRoverGallery;
