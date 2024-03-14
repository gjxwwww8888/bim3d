import { Box } from '@mui/material'
import React from 'react'
import BlackBtn from '../../../components/buttons/BlackBtn'

const SponsorBox = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '400px',
            bgcolor: 'rgb(8 126 164)',
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

                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'right',
                    color: 'black',
                    fontSize: '32px',
                    lineHeight: 1.25,
                    zIndex: 100
                }}>
                    <Box sx={{ marginTop: '0px', fontSize: "12px" }}> 赞助</Box>
                    <Box sx={{ marginTop: '20px', fontSize: "48px", fontWeight: '900' }}> 成为赞助商</Box>
                    <Box sx={{ marginTop: '40px', fontSize: "16px" }}> 这是一个与BIM3D-Editor社区建立联系的独特机会。</Box>
                    <Box sx={{ marginTop: '20px', fontSize: "16px" }}> 查看可用的赞助套餐或联系我们了解更多信息。</Box>

                </Box>
                <Box sx={{
                    marginLeft: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'right',
                    alignItems: "center",
                    color: 'black',
                    fontSize: '32px',
                    lineHeight: 1.25,
                    zIndex: 100
                }}>
                    <Box sx={{ marginTop: '40px', fontSize: "32px", marginBottom: '20px' }}> 让我们一起创造难忘的体验。</Box>
                    <BlackBtn label='赞 助' />
                </Box>
            </Box>

        </Box>

    )
}

export default SponsorBox