import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '@/views/test/ProTip';
import Copyright from '@/views/test/Copyright';
import { Alert, AlertTitle, Button, IconButton, Stack, Tooltip } from '@mui/material';
import {useTheme, ThemeProvider, createTheme} from '@mui/material/styles'
import DeleteIcon from '@mui/icons-material/Delete';
import Zoom from '@mui/material/Zoom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function App(props:any) {

  function clickme() {
    console.log("点我")

    
  }

  const prefersDrakMode = useMediaQuery('(pre-clor-scheme:dark)');


  const theme = React.useMemo(
    ()=> createTheme({
      palette:{
        mode:prefersDrakMode ? 'dark' : 'light',
      },
    }),
    [prefersDrakMode],
  );
  

  function changeColorMode() {
    console.log('props',props)
    // theme.palette.mode === 'dark'?
    if(theme.palette.mode === 'dark'){
      createTheme({
        palette: {
          mode: 'light',
        },
      });
    }
    else {
      createTheme({
        palette: {
          mode: 'dark',
        },
      });
    }
  }

  
 
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        
        <Typography variant="h4" component="h1" gutterBottom>
          Vite.js example
        </Typography>

        {theme.palette.mode} mode 
        <IconButton sx={{ml:1}} onClick={changeColorMode} color='inherit'>
          {theme.palette.mode === 'dark'? <Brightness7Icon/> : <Brightness4Icon/>}
        </IconButton>

        <Button variant='text'>Text</Button>
        <Button variant='contained' disableElevation>Text</Button>
        <Button variant='outlined' onClick={clickme}>Text</Button>
        <Tooltip title='delete' placement='top' arrow TransitionComponent={Zoom}>
          <IconButton>
            <DeleteIcon color='success'></DeleteIcon>
          </IconButton>
        </Tooltip>

        <Stack>
          <Alert severity='warning'>
            <AlertTitle>错误</AlertTitle>
            这是一个错误信息</Alert>
        </Stack>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
