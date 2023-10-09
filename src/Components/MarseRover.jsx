import React, { useEffect, useState } from 'react';

import axios from 'axios';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';

const MarsRoverComponent = () => {
  const [roverData, setRoverData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Array of rover names to fetch data for
    const roverNames = [
      'curiosity',
      'opportunity',
      'spirit',
      'perseverance',
      'insight',
      'sojourner',
      'pathfinder',
    ];

    // Create an object to store data for each rover
    const roverDataObject = {};

    // Fetch data for each rover
    const fetchData = async (roverName) => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos`,
          {
            params: {
              api_key: 'G6MQhXqXJf4OOBBehEQre3BsHijIV0bsG0gVhTt7',
              sol: 1000,
              page: 1,
            },
          }
        );
        roverDataObject[roverName] = {
          description: response.data.photos[0].rover.description,
          images: response.data.photos,
        };
      } catch (error) {
        console.error(`Error fetching ${roverName} rover data:`, error);
      }
    };

    // Fetch data for all rovers concurrently
    const fetchAllData = async () => {
      await Promise.all(roverNames.map((roverName) => fetchData(roverName)));
      setRoverData(roverDataObject);
      setLoading(false);
    };

    fetchAllData();
  }, []);

  return (
    <Box
      style={{
        backgroundColor: 'black',
        padding: 70,
      }}
    >
      <h1 style={{ textAlign: 'center', color: 'white' }}>Mars Rovers</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching rover data</p>
      ) : (
        Object.keys(roverData).map((roverName) => (
          <div key={roverName}>
            <Typography variant="h4" style={{ color: 'white', margin: '20px 0' }}>
              {roverName.toUpperCase()} ROVER
            </Typography>
            <Typography variant="body1" style={{ color: 'white' }}>
              {roverData[roverName].description}
            </Typography>
            <Grid container spacing={2}>
              {roverData[roverName].images.map((rover) => (
                <Grid item xs={12} sm={6} md={4} key={rover.id}>
                  <img
                    src={rover.img_src}
                    alt={` from ${rover.rover.name} Rover on Sol ${rover.sol}`}
                    style={{ width: '100%' }}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        ))
      )}
    </Box>
  );
};

export default MarsRoverComponent;
