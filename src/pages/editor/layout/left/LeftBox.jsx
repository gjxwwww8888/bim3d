import { Box } from '@mui/material'
import React from 'react'
import SideBar from './sidebar/SideBar'

const LeftBox = () => {
    return (
        <Box sx={{
            position: 'fixed',
            top: '48px',
            left: '0px',
            width: '294px',
            height: 'calc(100vh - 48px)',
            display: 'flex',
            flexDirection: 'row',
            bgcolor: '#444',
            zIndex: 100
        }}>
            <SideBar/>
        </Box>
    )
}

export default LeftBox