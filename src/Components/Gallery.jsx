import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, Paper, IconButton, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import image from "../assets/aboutus.png"

export default function NasaPhotoCarousel() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [nasaImages, setNasaImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const apiKey = 'G6MQhXqXJf4OOBBehEQre3BsHijIV0bsG0gVhTt7';

  useEffect(() => {
    // Fetch NASA's "Photo of the Day" images
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`)
      .then((response) => {
        setNasaImages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching NASA images:', error);
      });
  }, []);

  const handleOpen = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % nasaImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? nasaImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      paddingTop={10}
      style={{
        backgroundImage: `url(${image})`,
            width: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
      }}
    >
      <h1>NASA Photo Carousel</h1>
      <div id="carousel" style={{ maxWidth: '80%', width: '100%' }}>
        <Carousel
          selectedItem={currentIndex}
          onChange={(index) => setCurrentIndex(index)}
          showArrows={true}
          showStatus={false}
          showThumbs={true}
          dynamicHeight={false} // Prevent image stretching
        >
          {nasaImages.map((image, index) => (
            <div key={index}>
              <Paper
                style={{
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={image.url}
                  alt={`NASA ${index}`}
                  onClick={() => handleOpen(image, index)}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '60vh',
                    objectFit: 'contain', // Fit the image within the container
                  }}
                />
              </Paper>
            </div>
          ))}
        </Carousel>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '800px',
            maxHeight: '80vh',
            backgroundColor: 'white',
            boxShadow: 24,
            p: 2,
            textAlign: 'center',
          }}
        >
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{ position: 'absolute', right: '10px', top: '10px' }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <div>
              <img
                src={selectedImage.url}
                alt={`NASA`}
                style={{ maxWidth: '100%', maxHeight: '60vh' }}
              />
              <Typography variant="body1" sx={{ marginTop: '1rem' }}>
                {selectedImage.explanation}
              </Typography>
            </div>
          )}
        </div>
      </Modal>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: '10px',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': {
              bgcolor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: '10px',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': {
              bgcolor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </div>
    </Box>
  );
}
