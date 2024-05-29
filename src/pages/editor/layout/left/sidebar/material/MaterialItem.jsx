import React from 'react'
import ColorSelect from './ColorSelect'
import { Box, Divider, Typography } from '@mui/material'

const MaterialItem = () => {
    return (
        <Box sx={{
            minWidth: '200px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            justifyContent: 'center',

        }}>
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin:'10px 0px'
            }}>
                <Typography variant="button" gutterBottom color='#ccc' margin='10px'>
                    颜色
                </Typography>

                <ColorSelect />
            </Box>

            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin:'10px 0px'
            }}>
                <Typography variant="button" gutterBottom color='#ccc' margin='10px'>
                    贴图
                </Typography>

                <ColorSelect />
            </Box>

        </Box>
    )
}

export default MaterialItem