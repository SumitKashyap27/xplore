import React from 'react';
import { Box, Stack, Typography, Button } from "@mui/material";
import bg from "../assets/bg.png";
import Typewriter from 'typewriter-effect';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",}
  },
});

const Home = () => {
  return (
    <div style={{minHeight:"100vh"}}>
    <Box>
      <img
        src={bg}
        alt="Responsive Img"
        style={{
          width: '100%',
          height: '100vh', 
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        />

      <Box
        position="absolute"
        top="0"
        left="0"
        bottom="0"
        w="100%"
        h="100%"
        bg="black"
        opacity="0.5"
        />
      <Box
        position="absolute"
        top="30%"
        left="50%"
        transform="translate(-50%, -50%)"
        color={"whitesmoke"}
        p="4"
        borderRadius="md"
        fontSize={{ base: '3xl', md: '6xl' }}
        fontFamily={"Segoe UI"}
        >
        <Stack
          direction="column"
          spacing="4"
          py={["3", "7"]}
          >
          <Typography as="h1" sx={{ fontSize: { xs: '2rem', md: '4rem' }, fontWeight: 'bold', color: 'white' }}>
            Hey!
          </Typography>
          <Typewriter
            options={{
              strings: [
                '<span style="font-size: 2rem; display: block; text-align: center;">Exploring the <strong>Unknown</strong></span>',
                '<span style="font-size: 2rem; display: block; text-align: center;">Journey to the <strong>Stars</strong></span>',
                '<span style="font-size: 2rem; display: block; text-align: center;"><strong>Interstellar</strong> Adventures</span>',
                '<span style="font-size: 2rem; display: block; text-align: center;">Unveiling the <strong>Cosmos</strong></span>'
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriter-wrapper",
            }}
            />
        </Stack>
      </Box>
  <ThemeProvider theme={theme}>     
  <Box
    position="absolute"
    bottom="20px" 
    left="50%"
    transform="translateX(-50%)"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: '50%',
              minHeight: '100px',
              color: 'white',
              border: '2px solid white',
              
            }}
            fontFamily="Segoe UI"
          >
            Start
          </Button>
        </Link>
      </motion.div>
  </Box>
</ThemeProvider>

    </Box>
          </div>
  );
};

export default Home;
