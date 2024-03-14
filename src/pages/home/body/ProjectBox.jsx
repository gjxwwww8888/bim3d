import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Jiazhuang from '../../../assets/imgs/home.jpg';
import Bim from '../../../assets/imgs/bim.jpg';
import Game from '../../../assets/imgs/bg.jpg';
import Screen from '../../../assets/imgs/screen.jpg';


const ItemData = [
    { id: 0, img: Jiazhuang, label: '智慧家装 设计出图快人一步' },
    { id: 1, img: Bim, label: 'BIM 建模 结构模型一览无余' },
    { id: 2, img: Game, label: '畅游游戏世界 体验虚拟人生' },
    { id: 3, img: Screen, label: 'AI 导航 实时的地图路线规划' }

]

const ImgLabel = (props) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            bgcolor: 'white',
            margin: '40px 0'
        }}>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <img width={800} height={400} src={props.img} alt="背景" style={{ "borderRadius": '20px' }} />
            </Box>
            <Box sx={{ marginLeft: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '32px' }}>{props.label}</Box>
        </Box>

    )
}


const ProjectBox = () => {
    return (

        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            bgcolor: 'white',
            margin: '40px 0'
        }}>
            <Box sx={{ marginTop: '40px', display: 'flex', justifyContent: 'center', width: '1200px', fontSize: '48px', fontWeight: '600' }}>你可能对以下功能感兴趣 ？</Box>
            {
                ItemData.map(data => <ImgLabel key={data.id} img={data.img} label={data.label}></ImgLabel>)
            }
        </Box>
    )
}

export default ProjectBox