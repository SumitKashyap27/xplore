import React from 'react';
import { Box, Stack, Typography, Button } from "@mui/material";
import bg from "../assets/bg.png";
import Typewriter from 'typewriter-effect';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",}
    //secondary: purple,
  },
});

const Home = () => {
  return (
    <Box>
      <img
        src={bg}
        alt="Responsive Img"
        style={{
          width: '100%',
          height: '100vh', // Set the height to fill the viewport
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
    bottom="20px" // Adjust the distance from the bottom as needed
    left="50%"
    transform="translateX(-50%)"
  >
    <Button 
      variant="outlined"
      sx={{
        borderRadius: '50%', // Makes the button elliptical
        minHeight: '100px',
        color: "white",
        border: '2px solid white', // Add this line to set the outline color
      }} 
      fontFamily={"Segoe UI"} 
    >
      Start
    </Button>
  </Box>
</ThemeProvider>

    </Box>
  );
};

export default Home;
