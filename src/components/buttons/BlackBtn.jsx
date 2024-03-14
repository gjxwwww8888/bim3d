import { Button, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'

const theme = createTheme({
    palette: {
        primary: {
            main: '#051726'
        },
        secondary: {
            main: '#FFB300'
        }

    }
})

const BlackBtn = (props) => {

    const onBtnClick = () => {

    }

    return (

        <ThemeProvider theme={theme}>
            <Button sx={{
                margin: '0 10px',
                width: '126px',
                height: '48px',
                borderRadius: '24px',
                fontWeight: '900'
            }} variant="contained" color='primary' onClick={onBtnClick}>{props.label}</Button>

        </ThemeProvider>
    )
}

export default BlackBtn