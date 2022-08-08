import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Button, Container, CssBaseline, Stack, Tooltip, Typography } from '@mui/material';
import ProTip from './test/ProTip';
import Zoom from '@mui/material/Zoom';
import DeleteIcon from '@mui/icons-material/Delete';
import Copyright from './test/Copyright';
import TabsRouter from './router/Test';
import Login from './pages/login/Login';
import routerConfig from './router/RouterConfig';
import Home from './pages/home/Home';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function MyApp() {


    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <Home></Home>
            // <Login />
        //     <Container maxWidth="sm">
        //     {/* <TabsRouter></TabsRouter> */}
        //     <Stack spacing={2}>
        //         <Box
        //             sx={{
        //                 display: 'flex',
        //                 width: '100%',
        //                 alignItems: 'center',
        //                 justifyContent: 'center',
        //                 bgcolor: 'background.default',
        //                 color: 'text.primary',
        //                 borderRadius: 1,
        //                 p: 3,
        //             }}
        //         >

        //             {theme.palette.mode} mode
        //             <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        //                 {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        //             </IconButton>


        //         </Box>

        //         <Typography variant="h4" component="h1" gutterBottom>
        //             Vite.js example
        //         </Typography>

        //         <ProTip />

        //         <Button variant='text'>Text</Button>
        //         <Button variant='contained' disableElevation>Text</Button>
        //         <Button variant='outlined' >Text</Button>
        //         <Tooltip title='delete' placement='top' arrow TransitionComponent={Zoom}>
        //             <IconButton>
        //                 <DeleteIcon color='success'></DeleteIcon>
        //             </IconButton>
        //         </Tooltip>


        //         <Copyright />

        //     </Stack>


        // </Container >
    );
}

export default function ToggleColorMode() {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <MyApp />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
