import {Box } from '@mui/material'
import React from 'react'
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const Events = () => {
  return (
    <Box
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
      <Box 
>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, sm: 8, md: 12 }}

      >
        {Array.from(Array(9)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}
           >
            <Item sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '200px', // Adjust the height as needed
              backgroundColor: 'lightblue', // Add a background color for visibility
            }}>xs=2</Item>
          </Grid>
        ))}
      </Grid>
      </Box>

      </Box>
  )
}

export default Events;

