import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '@/views/test/ProTip';
import Copyright from '@/views/test/Copyright';


export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Vite.js example
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}