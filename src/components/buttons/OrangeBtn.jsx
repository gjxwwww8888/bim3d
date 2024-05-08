import { Button, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import BIM from '../../pages/editor/core/BIM';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF6F00'
        },
        secondary: {
            main: '#FFB300'
        }

    }
})

const OrangeBtn = (props) => {

    const naveTo = useNavigate();

    const onBtnClick = (tips) => {
        console.log(tips)
        switch (tips) {
            case "进入编辑器":
                naveTo('/editor')
                break;
            case "预览项目":
                window.open('https://gitee.com/songmy1093697597/bim3d-editor', '_blank')
                break;
        }
    }


    return (

        <ThemeProvider theme={theme}>
            <Button sx={{
                margin: '0 10px',
                width: '160px',
                height: '42px',
                borderRadius: '21px',
                fontWeight: '900'
            }} variant="contained" color='primary' onClick={(e) => onBtnClick(props.label)}>{props.label}</Button>

        </ThemeProvider>
    )
}

export default OrangeBtn