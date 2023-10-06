import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, Paper, IconButton, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Error from './Error';
import Loader from './Loader';
//import { motion } from 'framer-motion';

import image from '../assets/aboutus.png';

export default function NasaPhotoCarousel() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [nasaImages, setNasaImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const apiKey = 'G6MQhXqXJf4OOBBehEQre3BsHijIV0bsG0gVhTt7';

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`)
      .then((response) => {
        setNasaImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching NASA images:', error);
        setError(true);
        setLoading(false);
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
  const marginValue = window.innerWidth <= 768 ? '100px' : '50px';
  //const paddingValue = window.innerWidth <= 768 ? '10px' : '20px';
  return (
    <Box id="gallery"
      style={{
        backgroundImage: `url(${image})`,
        width: '100%',
        minHeight: '100vh',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <h1
        style={{
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.6rem',
          textDecoration: 'none',
          fontSize: '2rem',
          color: 'white',
          marginTop: '7rem',
          marginBottom: '2rem',
          marginLeft:marginValue,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        NASA Photo Carousel
      </h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Error message="Error fetching NASA images" />
      ) : (
        <div
          
          style={{
            maxWidth: '80%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '2rem',
          }}
        >
          <Carousel
            selectedItem={currentIndex}
            onChange={(index) => setCurrentIndex(index)}
            showArrows={true}
            showStatus={false}
            showThumbs={true}
            dynamicHeight={false}
            useKeyboardArrows={true}
            transitionTime={500}
          >
            {nasaImages.map((image, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Paper
                  style={{
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    borderRadius: '8px',
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
                      objectFit: 'contain',
                    }}
                  />
                  <div
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      color: 'black',
                    }}
                  >
                    <Typography
                      variant="h5"
                      style={{
                        fontSize: '1.2rem',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {image.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        maxHeight: '10vh',
                        overflowY: 'auto',
                        fontSize: '0.9rem',
                      }}
                    >
                      {image.explanation}
                    </Typography>
                    <Typography
                      variant="caption"
                      style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}
                    >
                      {image.date}
                    </Typography>
                  </div>
                </Paper>
              </div>
            ))}
          </Carousel>
        </div>
      )}

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
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px',
            padding: '1rem',
            textAlign: 'center',
          }}
        >
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            style={{ position: 'absolute', right: '10px', top: '10px' }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <div>
              <img
                src={selectedImage.url}
                alt="NASA"
                style={{ maxWidth: '100%', maxHeight: '60vh' }}
              />
              <Typography
                variant="h5"
                style={{
                  fontSize: '1.2rem',
                  marginTop: '1rem',
                }}
              >
                {selectedImage.title}
              </Typography>
              <Typography
                variant="body1"
                style={{
                  maxHeight: '10vh',
                  overflowY: 'auto',
                  fontSize: '0.9rem',
                }}
              >
                {selectedImage.explanation}
              </Typography>
              <Typography
                variant="caption"
                style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}
              >
                {selectedImage.date}
              </Typography>
            </div>
          )}
        </div>
      </Modal>
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconButton
          onClick={handlePrev}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            marginRight: '1rem',
          }}
        >
          <ChevronLeftIcon style={{ color: 'white' }} />
        </IconButton>
        <IconButton
          onClick={handleNext}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        >
          <ChevronRightIcon style={{ color: 'white' }} />
        </IconButton>
      </div>
    </Box>
  );
}