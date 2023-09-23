import React from 'react';
import { Box, Stack, Typography } from "@mui/material";
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import aboutus from "../assets/aboutus.png";
import planet1 from "../assets/planet1.png";
import planet2 from "../assets/planet2.png";
import planet3 from "../assets/planet3.png";
import planet4 from "../assets/planet4.png";
import planet5 from "../assets/planet5.png";
import planet6 from "../assets/planet6.png";
import planet7 from "../assets/planet7.png";
import planet8 from "../assets/planet8.png";
import planet9 from "../assets/planet9.png";

const getRandomPercentage = () => Math.floor(Math.random() * 80) + 10 + '%';

const planets = [
  { src: planet1, x: getRandomPercentage(), y: getRandomPercentage() },
  { src: planet2, x: getRandomPercentage(), y: getRandomPercentage() },
  { src: planet3, x: getRandomPercentage(), y: getRandomPercentage() },
  { src: planet4, x: getRandomPercentage(), y: getRandomPercentage() },
  { src: planet5, x: getRandomPercentage(), y: getRandomPercentage() },
  { src: planet6, x: getRandomPercentage(), y: getRandomPercentage() },
  { src: planet7, x: getRandomPercentage(), y: getRandomPercentage() },
  { src: planet8, x: getRandomPercentage(), y: getRandomPercentage() },
  { src: planet9, x: getRandomPercentage(), y: getRandomPercentage() },
];

const About = () => {
  return (
      <Box id="about" 
      sx={{
        //position:'relative',
       // minHeight:'100vh',
      }}>
        <img
          src={aboutus}
          alt="Responsive Img"
          style={{
            width: '100%',
            height: '100%', 
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            right:0,
            zIndex: -2
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
          top="20%"
          left="5%"
          right="5%"
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
              About Us
            </Typography>
            <Stack
              h={'full'}
              p={'2'}
              alignItems={'center'}
              direction={['column', 'row']}
            >
              <Typography letterSpacing={'widest'} lineHeight={"170%"} p={["4", "0"]} color={'grey'} textAlign={"left"}>
                Welcome to our cosmic adventure! We're here to take you on an incredible journey through the vast and mysterious universe, 
                right from the comfort of your screen. Our mission is to bring the wonders of space to life, 
                providing you with a front-row seat to the captivating and awe-inspiring aspects of the cosmos.
                We've got a cosmic arsenal at our disposal to make this journey truly unforgettable. First and foremost, we have access to 
                stunning NASA photos that capture the breathtaking beauty of our celestial neighbors, distant galaxies, and otherworldly phenomena.
                These images will transport you to the far reaches of the universe, allowing you to witness its grandeur like never before.
                But that's not all! We also keep you updated with the latest space news, ensuring you stay informed about the cutting-edge 
                discoveries and breakthroughs happening in the world of space exploration. Whether it's a new exoplanet discovery, 
                a historic space mission, or groundbreaking research on the cosmos, we've got you covered.
                To make this cosmic adventure even more immersive, we bring you captivating videos that take you on virtual voyages through space.
                You can explore the wonders of the universe up close, from the dazzling rings of Saturn to the violent beauty of a supernova explosion.
                And of course, we can't forget about the intrepid Mars rovers. Join us as we follow the adventures of these robotic explorers on the 
                Red Planet, witnessing their discoveries and challenges as they uncover the secrets of Martian terrain.
                So, whether you're a seasoned space enthusiast or just starting to dip your toes into the cosmic waters, we invite you to join us on 
                this extraordinary cosmic journey. Together, we'll unlock the mysteries of the universe,
                one breathtaking image, one exciting news story, and one thrilling video at a time. Welcome aboard, cosmic traveler!
                <strong>Join us and discover the wonders of space!</strong>
              </Typography>
            </Stack>
          </Stack>
        </Box>
        
        {planets.map((planet, index) => (
          <motion.img
            key={index}
            src={planet.src}
            alt={`Planet ${index + 1}`}
            style={{
              position: 'absolute',
              width: '7vw', // Adjust the size as needed
              left: planet.x,
              top: planet.y,
              transform: `translate(-50%, -50%)`, // Center the image at the given position
              zIndex: -1,
            }}
            initial={{
              opacity: 0,
              scale: 0.5,
              x: 0,
              y: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: getRandomPercentage(), // Change this to move along the X-axis
              y: getRandomPercentage(), // Change this to move along the Y-axis
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4,
            }}
          />
        ))}
      </Box>

  );
};

export default About;
