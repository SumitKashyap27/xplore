import React from 'react';
import { Box, Stack, Typography } from "@mui/material";
import aboutus from "../assets/aboutus.png";
//import Typewriter from 'typewriter-effect';


const About = () => {
  return (
    <div style={{minHeight:"100vh"}}>
    <Box id="about">
      <img
        src={aboutus}
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
        opacity="0.5"
        />
      <Box
        position="absolute"
        top="30%"
        left="5%"
        right="5%"
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
          >
          <Typography as="h1" sx={{ fontSize: { xs: '2rem', md: '4rem' }, fontWeight: 'bold', color: 'white' }}>
            Hey!
          </Typography>
          <Stack
          h={'full'}
          p={'2'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Typography letterSpacing={'widest'} lineHeight={"170%"} p={["4", "0"]} color={'grey'}>
            I'm a skilled Front-end Developer and Web Designer, proficient in JavaScript and ReactJS, with a flair for SCSS.
            My design expertise shines through with Figma and Adobe Illustrator, where I craft captivating interfaces. Additionally,
            I love to work on illustrations, using Adobe Illustrator to create unique art. I'm also adept at image editing with Pixlr.
            Passionate about web development, I strive to deliver top-notch, user-friendly websites that exceed modern standards.
            I'm dedicated to pushing boundaries, embracing new technologies, and creating impactful solutions.
          </Typography>
        </Stack>
        </Stack>
      </Box>
    </Box>
    </div>
  );
};

export default About;
