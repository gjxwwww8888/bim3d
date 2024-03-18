import { Box } from '@mui/material'
import React from 'react'
import BimLogo from '../../../../components/logo/BimLogo'
import { topMenuData, topMenuRightData } from '../data/ViewDatas'
import TopMenuBtn from './TopMenuBtn'


const TopBar = () => {
    return (

        <Box sx={{
            position: 'fixed',
            top: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '48px',
            margin: '0',
            padding: '0',
            bgcolor: 'white',
            zIndex: 1000,
        }}>
            <Box sx={{
                position:'fixed',
                left: '60px',
                height: '48px'
            }}>
                <BimLogo color='#555'></BimLogo>
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '60px',
                borderRadius: '32px',
                width:"100%",
                height: '48px',
                padding: '0 10px'
            }}>
                {
                    topMenuData.map((data)=>{
                        return <TopMenuBtn key={data.key} arialabel={data.arialabel} icon={data.icon} label={data.label}></TopMenuBtn>
                    })
                }
            </Box>

            <Box sx={{
                position:'fixed',
                right:'60px',
                height: '48px'
            }}>
                 {
                    topMenuRightData.map((data)=>{
                        return <TopMenuBtn key={data.key} arialabel={data.arialabel} icon={data.icon} label={data.label}></TopMenuBtn>
                    })
                }
            </Box>
        </Box>
    )
}

export default TopBar