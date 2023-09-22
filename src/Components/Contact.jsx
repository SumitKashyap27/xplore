import React from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import ast from "../assets/astronaut.png";
import { motion } from "framer-motion";
import space from "../assets/contact.png"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
});

const Contact = () => {
  return (
    <div style={{minHeight:"100vh"}} >

    <Box>
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
          zIndex: -1,
        }}
        />
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: '80vh', padding: '2rem' }}
      >
        {/* Left Side */}
        <ThemeProvider theme={theme}>
          <Box
            id="contact"
            sx={{
              color: 'white',
              zIndex: 1,
              pl: {xs:10, sm: 2},
              pr: { xs: 0, sm: 50 }, // Adjust right padding for different screen sizes
              textAlign: { xs: 'center', sm: 'left' }, // Center text on small screens, left-align on larger screens
            }}
            >
            <Typography variant="h5" mb={1} 
            sx={{
              pt:{ xs:12 ,sm:12},
            }}>
              Get In Touch
            </Typography>
            <Typography variant="h3" fontWeight="bold" mb={1} top={0}>
              Contact.
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
        <Box display="flex" justifyContent="left" alignItems="left">
          <motion.div
            style={{
              maxWidth: '200px',
              width: '100%',
            }}
            animate={{
              translateY: "20px",
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
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
    </Box>
              </div>
  );
};

export default Contact;
