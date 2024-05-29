import { Box, Button } from '@mui/material'
import React from 'react'
import { modelMenuData } from '../../../data/ViewDatas'

const ModelItem = () => {
    return (
        <Box sx={{
            minWidth:'200px',
            height: '100%',
            display: 'flex',
			flexDirection:'column',
			padding: '10px',
            justifyContent:'center',
           
        }}>
            {
                modelMenuData.map(value=> <Button sx={{
                    marginTop:'18px'
                }}  key={value.id} variant="outlined">{value.ariaLabel}</Button>)
            }
        </Box>

    )
}

export default ModelItem