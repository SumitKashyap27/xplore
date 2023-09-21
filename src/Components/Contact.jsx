import React from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import ast from "../assets/astronaut.png"
const Contact = () => {
  return (
    <Grid
      container
      spacing={4}
      alignItems="center"
      justifyContent="center"
      style={{ height: '80vh', padding: '2rem' }}
    >
      {/* Left Side */}
      <Box id="contact" bgcolor="">
        <Typography variant="h5" mb={4}>
          Get In Touch
        </Typography>
        <Typography variant="h1" fontWeight="bold" mb={4}>
          Contact.
        </Typography>
        <Typography pb={3}>Your Name</Typography>
        <TextField
          placeholder="Your Name"
          variant="filled"
          fullWidth
          margin="normal"
          size="large"
          sx={{ mb: 4 }}
          focused
        />
        <Typography pb={3}>Your Email</Typography>
        <TextField
          placeholder="Your Email"
          variant="filled"
          fullWidth
          margin="normal"
          size="large"
          sx={{ mb: 4 }}
          focused
        />
        <Typography pb={3}>Any Message</Typography>
        <TextField
          placeholder="Your Message"
          variant="filled"
          fullWidth
          margin="normal"
          size="large"
          sx={{ mb: 4 }}
          multiline
          rows={6}
          focused
        />
        <Button variant="contained" color="primary" size="large">
          Send Message
        </Button>
      </Box>

      {/* Right Side (Image) */}
      <Box display={{ xs: 'none', md: 'block' }}>
      <img
        src={ast}
        alt="Contact"
        style={{
            borderRadius: '16px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            maxWidth: '400px',
            width: '100%',
        }}
        />

      </Box>
    </Grid>
  );
};

export default Contact;
