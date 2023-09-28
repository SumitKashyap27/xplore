import React, { useState } from 'react';
import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="absolute" color="transparent" minheight="20vh">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.6rem',
              color: "#f3e5f5",
              textDecoration: 'none',
            }}
          >
            XPLORE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: 'white',
                '& svg': {
                  fill: 'white',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"               
                component={Link}
              to="/home" color={'black'}>
                  Home
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"               
                component={Link}
              to="/about"color={'black'}>
                  About 
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"               
                component={Link}
              to="/gallery"color={'black'}>
                    Gallery
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"              
                component={Link}
              to="/contact" color={'black'}>
                  Contact
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.6rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            XPLORE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, pl: 60 }}>
            <Button
              component={Link}
              to="/"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                mx: 1,
                color: 'white',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/about"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                mx: 1,
                color: 'white',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              About
            </Button>
            <Button
              component={Link}
              to="/gallery"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                mx: 1,
                color: 'white',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              Gallery
            </Button>
            <Button
              component={Link}
              to="/contact"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                mx: 1,
                color: 'white',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              Contact
            </Button>
            <Button
              component={Link}
              to="/events"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                mx: 1,
                color: 'white',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              Events 
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
