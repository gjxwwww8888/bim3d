import { Box, IconButton } from '@mui/material'
import React from 'react'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
const BimLogo = (props) => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<IconButton aria-label="bimlogo" size='large'>
				<AutoAwesomeOutlinedIcon sx={{color:props.color}}></AutoAwesomeOutlinedIcon>
				<Box sx={{ marginLeft: '10px', fontSize: '18px', fontWeight: '700', color:props.color }}>BIM3D EDITOR</Box>
			</IconButton>
		</Box>
	)
}

export default BimLogo