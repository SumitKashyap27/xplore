import React from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import ast from '../assets/astronaut.png';
import { motion } from 'framer-motion';
import space from '../assets/contact.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
  },
});

//const paddingValue = window.innerWidth <= 768 ? '200px' : '0px';

const Contact = () => {
  return (
    <Box style={{ position: 'relative' }}>
      <img
        src={space}
        alt="Space Background"
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <div style={{ position: 'relative', top: 50, left: 0, width: '100%', height: '100%' }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ height: '100vh', padding: '2rem', }}
        >
          {/* Left Side */}
          <ThemeProvider theme={theme}>
            <Box
              id="contact"
              sx={{
                color: 'white',
                zIndex: 1,
                border: '1px solid white',
                borderRadius:6,
                padding:4,
                pl: { xs: 0, sm: 2 },
                pr: { xs: 0, sm: 2 },
                textAlign: { xs: 'center', sm: 'left', }
                
              }}
            >
              <Typography variant="h5" mb={1} sx={{ pt: { xs: 5, sm: 5 } }}>
                Get In Touch
              </Typography>
              <Typography variant="h3" fontWeight="bold" mb={1} top={0}>
                Contact
              </Typography>
              <Typography>Your Name</Typography>
              <TextField
                placeholder="Your Name"
                variant="filled"
                fullWidth
                size="large"
                sx={{ mb: 3 }}
                focused
                InputProps={{
                  sx: { color: 'white' },
                }}
              />
              <Typography>Your Email</Typography>
              <TextField
                placeholder="Your Email"
                variant="filled"
                fullWidth
                size="large"
                sx={{ mb: 3 }}
                focused
                InputProps={{
                  sx: { color: 'white' },
                }}
              />
              <Typography pb={2}>Any Message</Typography>
              <TextField
                placeholder="Your Message"
                variant="filled"
                fullWidth
                size="large"
                sx={{ mb: 2 }}
                multiline
                focused
                InputProps={{
                  sx: { color: 'white' },
                }}
              />
              <Button variant="contained" color="primary" size="large">
                Send Message
              </Button>
            </Box>
          </ThemeProvider>

          {/* Right Side (Image) */}
          <Box display="flex" justifyContent="right" alignItems="right">
            <motion.div
              style={{
                maxWidth: '200px',
                width: '100%',  
              }}
              animate={{
                translateY: '40px',
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <img
                src={ast}
                alt="Astronaut"
                style={{
                  width: '100%',
                }}
              />
            </motion.div>
          </Box>
        </Grid>
      </div>
    </Box>
  );
};

export default Contact;
