import { Box } from '@mui/material';
import React from 'react';
import Fengmian from '../../../assets/imgs/fengmian.jpg';
import OrangeBtn from '../../../components/buttons/OrangeBtn';

const CoverBox = () => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '960px',
            bgcolor: 'rgb(5 23 38)',
            borderRadius: '0 0 32px 32px',

        }}>
            <Box sx={{
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                borderRadius: '100px'
            }}>
                <img width={500} height={500} src={Fengmian} alt="背景" />
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'left',
                color: 'white',
                fontSize: '64px',
                lineHeight: 1.25,
                width: '1200px',
                zIndex: 100
            }}>
                加入项目，进入3D开发世界.<br />
                Join Bim3d-Editor Project ,
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'right',
                color: 'white',
                fontSize: '64px',
                lineHeight: 1.25,
                width: '1200px',
                zIndex: 100
            }}>
                Entering the 3D world .
            </Box>
            <Box sx={{
                marginTop: '30px',
                display: 'flex',
                justifyContent: 'right',
                color: 'white',
                fontSize: '48px',
                lineHeight: 1.25,
                width: '1200px',
                zIndex: 100
            }}>
                启程 2024<br />
                Start 2024
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px',
                lineHeight: 1.25,
                width: '1200px',
                zIndex: 100
            }}>
                期待您的加入<br />

            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px',
                lineHeight: 1.25,
                width: '1200px',
                zIndex: 100
            }}>
                Looking forward to your joining

            </Box>

            <Box sx={{
                position:'absolute',
                bottom:'100px',
                display: 'flex',
                justifyContent: 'left',
                color: 'white',
                width: '1200px',
                zIndex: 100
            }}>
                <OrangeBtn label='进入编辑器' ></OrangeBtn>
                <OrangeBtn label='预览项目' ></OrangeBtn>
            </Box>
            <Box sx={{
                position:'absolute',
                bottom:'100px',
                display: 'flex',
                justifyContent: 'right',
                fontSize: '12px',
                color:'white',
                lineHeight: 1.25,
                width: '1200px',
                zIndex: 100
            }}>
                © Copyright by songmy  ~  AOSP & Bim3dEditor 
            </Box>
        </Box>
    )
}

export default CoverBox