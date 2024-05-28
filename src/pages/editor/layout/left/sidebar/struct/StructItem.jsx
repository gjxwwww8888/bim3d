import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { structMenuData } from '../../../data/ViewDatas'
import { useState } from 'react'
import BIM from '../../../../core/BIM'
import { MODE } from '../../../../core/const/const'


const StructBox = (props) => {

	const onItemClick = () => {
		props.onChildEvent(props.label);
	}
	
	return (
		<Box sx={{
			width: '60px',
			height: '80px',
			backgroundColor:  props.select ?'#999' :'#555',
			margin: '4px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			color: 'white',
			borderRadius: '5px',
			cursor:'pointer',
			":hover": {
				backgroundColor: '#999',
			},
			border: props.select ? '2px solid #2E83FF' : 'none',
		}} onClick={onItemClick}>
			{props.label}
		</Box>
	)
}


const StructItem = () => {

	const [menus, setMenus] = useState(structMenuData)
	
	const onItemClick = (e) => {
		for(let obj of structMenuData){
			obj.select = obj.ariaLabel === e; 
		}
		setMenus([...structMenuData]);
	}

	return (
		<Box sx={{

			height: '100%',
			display: 'flex',
			flexWrap: 'wrap',
			padding: '8px',
		}}>
			{
				menus.map(value => {
					return <StructBox key={value.id} label={value.ariaLabel} select={value.select} onChildEvent={onItemClick} />
				})
			}
		</Box>

	)
}

export default StructItem