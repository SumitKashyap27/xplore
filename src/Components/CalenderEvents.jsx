import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//import { useTheme } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Typography from '@mui/material/Typography';

import {Typography, Paper, Box } from '@mui/material';

function MyCalendar() {
  const [value, onChange] = useState(new Date());
  //const theme = useTheme();

  return (
    
    <Box
      style={{
        backgroundColor: 'black',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h3" color="white" style={{ paddingBottom:'3rem' }}>
        Astronomical Calendar Event
      </Typography>
      <Paper style={{}}>
        <Calendar onChange={onChange} value={value} />
      </Paper>


      <Card sx={{ 
        display: 'flex',
        marginTop:'5rem',
        width:"50rem" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>

      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
    <Card sx={{ 
        display: 'flex',
        marginTop:'2rem',
        width:"50rem" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>

      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        //image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
    <Card sx={{ 
        display: 'flex',
        marginTop:'2rem',
        width:"50rem" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>

      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        //image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
    <Card sx={{ 
        display: 'flex',
        marginTop:'2rem',
        width:"50rem" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>

      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        //image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
    </Box>
  );
}

export default MyCalendar;
