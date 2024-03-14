import { Box, IconButton } from '@mui/material'
import React from 'react'

const LabelBtn = (props) => {
    return (
        <Box sx={{ margin: '0px 5px' }}>
            <IconButton sx={{ color: "rgb(64 71 86)", fontWeight: '500', fontSize: '16px' }}>
                {props.label}
            </IconButton>
        </Box>
    )
}

export default LabelBtn