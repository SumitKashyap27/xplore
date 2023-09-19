import React from 'react'
import { Box, Stack, Typography} from '@mui/material'
//import img3 from "../assets/3.png"
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
      <Box
        position="relative"
        display="inline-block"
        width="100%"
        overflow="hidden"
        backgroundColor={'black'}
        id='home'        
      >
        {/* <img
          src={img3}
          alt="Responsive Img"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
          
          
        /> */}

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
          transform="translate(-20%, -50%)"
          color={"whitesmoke"}
          p="4"
          borderRadius="md"
          fontSize={"6xl"}
          fontFamily={"monospace"}
        >
        <Stack
          direction="column"
          pt={"50"}
          spacing="4"
          fontSize={{ base: '3xl', md: '6xl' }}
          py={["6", "4"]} 
        >
          <Typography pt={10} as="h1" size="xl" fontWeight="bold" color="white">
            Hey!
          </Typography>
        <Typewriter
        
          options={{
            strings: [
            'Welcome to My <Portfolio>Portfolio</Portfolio>',
            'I am a <Web>Web Developer</Web>',
            '<Graphic>Graphic</Graphic> Designer',
            '<UI/UX>UI/UX</UI/UX> Designer'],
            autoStart: true,
            loop: true,
            wrapperClassName:"typewriter-wrapper",
          }}
        />
        </Stack>
      </Box>  
      </Box>
      
  )
}
export default Home