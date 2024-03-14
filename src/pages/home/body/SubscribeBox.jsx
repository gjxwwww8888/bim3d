import { Box, OutlinedInput } from '@mui/material'
import React from 'react'
import BlackBtn from '../../../components/buttons/BlackBtn'

const SubscribeBox = () => {
    return (
        <Box sx={{
            height: '400px',
            bgcolor: 'rgb(255 111 0)',
            borderRadius: '32px',

        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: "100%"
            }}>
                <Box sx={{
                    width: '600px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'right',
                    color: 'black',
                    fontSize: '32px',
                    lineHeight: 1.25,
                    zIndex: 100
                }}>
                    <Box sx={{ marginTop: '0px', fontSize: "12px" }}> 新闻</Box>
                    <Box sx={{ marginTop: '20px', fontSize: "48px", fontWeight: '900' }}> 立即订阅</Box>
                    <Box sx={{ marginTop: '40px', fontSize: "18px" }}> 立即订阅注册以接收作者、开发者、直播、赞助商的更新信息</Box>


                </Box>
                <Box sx={{
                    width: '600px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'right',
                    color: 'black',
                    fontSize: '32px',
                    lineHeight: 1.25,
                    zIndex: 100
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <OutlinedInput placeholder="输入电子邮箱" sx={{ borderRadius: '30px', width: "360px", height: '48px', bgcolor: 'white' }} />
                        <BlackBtn label='订 阅' />
                    </Box>

                    <Box sx={{ marginTop: '40px', fontSize: "12px" }}> 单击“订阅”即表示您同意我们的条款和条件。</Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SubscribeBox