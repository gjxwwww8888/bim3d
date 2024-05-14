import { Box } from '@mui/material'
import React from 'react'
import TopBar from './layout/topbar/TopBar'
import CanvasEditor from './layout/canvas/CanvasEditor'
import LeftBox from './layout/left/LeftBox'

const Editor = () => {
  return (
      <Box>
        <CanvasEditor/>
        <TopBar/>
        <LeftBox/>
      </Box>
  )
}

export default Editor