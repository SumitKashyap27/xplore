import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function loader() {
  return (
    <Box sx={{ display: 'flex', paddingTop:20 }}>
      <CircularProgress />
    </Box>
  );
}