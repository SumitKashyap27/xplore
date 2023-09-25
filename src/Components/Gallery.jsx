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
import image from "../assets/aboutus.png"

// ... (your existing imports and code)

export default function NasaPhotoCarousel() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [nasaImages, setNasaImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const apiKey = 'G6MQhXqXJf4OOBBehEQre3BsHijIV0bsG0gVhTt7';

  useEffect(() => {
    // Fetch NASA's "Photo of the Day" images
    setLoading(true); // Set loading to true when starting data fetching
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`)
      .then((response) => {
        setNasaImages(response.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching NASA images:', error);
        setError(true); // Set error to true when an error occurs
        setLoading(false); // Set loading to false when an error occurs
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
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <h1>NASA Photo Carousel</h1>
      
      {/* Conditionally render loader or error message */}
      {loading ? (
        <Loader /> // Replace with your loader component
      ) : error ? (
        <Error message={"Error fetching NASA images"} /> // Replace with your error component
      ) : (
        // Render the gallery component when data is loaded and no error
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
              <div key={index} style={{ margin: '0 auto' }}>
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
                  <div style={{ padding: '1rem' }}>
                    <Typography variant="h5">{image.title}</Typography>
                    <Typography variant="body1">{image.explanation}</Typography>
                    <Typography variant="caption">{image.date}</Typography>
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
            boxShadow: 400,
            p: 2,
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
                alt={`NASA`}
                style={{ maxWidth: '100%', maxHeight: '60vh' }}
              />
              <Typography variant="h5" style={{ marginTop: '1rem' }}>{selectedImage.title}</Typography>
              <Typography variant="body1">{selectedImage.explanation}</Typography>
              <Typography variant="caption">{selectedImage.date}</Typography>
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
          style={{
            position: 'absolute',
            left: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            ':hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            ':hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </div>
    </Box>
  );
}
