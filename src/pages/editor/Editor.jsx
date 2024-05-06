import { Box } from '@mui/material'
import React from 'react'
import TopBar from './layout/topbar/TopBar'
import CanvasEditor from './layout/canvas/CanvasEditor'

const Editor = () => {
  return (
      <Box>
        <CanvasEditor/>
        <TopBar/>
      </Box>
  )
}

export default Editor