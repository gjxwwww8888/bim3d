import { Box, Divider } from '@mui/material'
import React from 'react'

const HomeFooter = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '600px',
            bgcolor: 'white',
        }}>
            <Box sx={{
                position: "absolute",
                display: 'flex',

                justifyContent: 'center',
                width: '100%',
                zIndex: 1
            }}>
                <Box sx={{

                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: "500px",
                    height: '500px',
                    borderRadius: "50%",
                    bgcolor: "#FFB300",

                }}></Box>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: "100%",
                zIndex: 100
            }}>
                <Box sx={{

                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'right',
                    color: 'black',
                    fontSize: '32px',
                    lineHeight: 1.25,
                    width: '1200px',
                }}>
                    <Box sx={{ marginTop: '0px', fontSize: "12px" }}> 让我们合作</Box>
                    <Box sx={{ marginTop: '20px', fontSize: "48px", fontWeight: '900' }}> 有任何问题请联系我们</Box>
                    <Box sx={{ marginTop: '40px', fontSize: "16px" }}>你可以在 bim3d-editor 阅读之前的更新并查阅我们的开发进度.</Box>
                    <Box sx={{ marginTop: '20px', fontSize: "16px" }}>你也可以在 gitee 关注我们，或加入我们的开源项目贡献代码.</Box>

                </Box>
                <Box sx={{
                    marginTop: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '1200px'
                }}>
                    <Divider />
                    <Box sx={{ marginTop: '20px', fontSize: "12px" }}>© 2024 songmy & Bim3dEditor  all rights reserved</Box>
                </Box>
            </Box>
        </Box>

    )
}

export default HomeFooter