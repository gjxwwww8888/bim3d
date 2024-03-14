import { Box } from '@mui/material'
import React from 'react'
import CoverBox from './CoverBox'
import AboutBox from './AboutBox'
import SubscribeBox from './SubscribeBox'
import ProjectBox from './ProjectBox'
import SponsorBox from './SponsorBox'

const HomeBody = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            margin: 0,
            padding: 0
        }}>

            <CoverBox />
            <AboutBox />
            <SubscribeBox />
            <ProjectBox />
            <SponsorBox />
        </Box>
    )
}

export default HomeBody