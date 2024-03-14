import { Box } from '@mui/material'
import React from 'react'
import LabelBtn from '../../../components/buttons/LabelBtn'
import GithubIcon from '../../../components/icons/GithubIcon'
import BimLogo from '../../../components/logo/BimLogo'
import GiteeIcon from '../../../components/icons/GiteeIcon'

const BtnDatas = [
	{ id: '0', label: '教程' },
	{ id: '1', label: '关于' },
	{ id: '2', label: '社区' },
	{ id: '4', label: '博客' },
]

const HomeHeader = () => {
	return (
		<>
			<Box sx={{
				position: 'fixed',
				top: 20,
				right: 0,
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				width: '100%',
				height: '80px',
				margin: '0',
				padding: '0',
				zIndex: 1000,
			}}>
				<Box sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',

				}}>
					<Box sx={{
						display: 'flex',
						justifyContent: 'left',
						alignItems: 'center',
						marginLeft: '80px',
						bgcolor: 'rgb(5 23 38)',
						borderRadius: '32px',
						height: '64px'
					}}>
						<BimLogo></BimLogo>
					</Box>
					<Box sx={{
						display: 'flex',
						justifyContent: 'right',
						alignItems: 'center',
						marginRight: '60px',
						bgcolor: 'rgb(134 225 173)',
						borderRadius: '32px',
						height: '64px',
						padding: '0 10px'
					}}>
						{
							BtnDatas.map(data =>
								<LabelBtn key={data.id} label={data.label} />
							)
						}
						<GithubIcon></GithubIcon>
						<GiteeIcon></GiteeIcon>
					</Box>

				</Box>
			</Box>
		</>
	)
}

export default HomeHeader