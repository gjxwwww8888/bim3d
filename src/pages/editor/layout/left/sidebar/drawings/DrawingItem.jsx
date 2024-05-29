import { Box, Button } from '@mui/material'
import React from 'react'
import { drawingMenuData } from '../../../data/ViewDatas'

const DrawingItem = () => {
    return (
        <Box sx={{
            minWidth: '200px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            justifyContent: 'center',

        }}>
            {
                drawingMenuData.map(value => <Button sx={{
                    marginTop: '18px'
                }} key={value.id} variant="outlined">{value.ariaLabel}</Button>)
            }
        </Box>

    )
}

export default DrawingItem