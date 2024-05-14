import { Box } from '@mui/material'
import React from 'react'

const SideBarItem = (props) => {
    return (
        <Box flexDirection='column' alignContent='center' justifyContent='center' color='#ccc' padding='0'>
            {props.icons}
            <Box fontSize='12px' textAlign='center' lineHeight='14px'>
                {props.itemlabel}
            </Box>
        </Box>
    )
}

export default SideBarItem