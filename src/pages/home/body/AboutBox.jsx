import { Box } from '@mui/material'
import React from 'react'

const AboutBox = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '800px',
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
                flexDirection: 'row',
                justifyContent: 'center',
                color: 'black',
                fontSize: '32px',
                lineHeight: 1.25,
                zIndex: 100
            }}>
                <b>Bim3d Editor </b> 是基于 <i>webgpu/webgl/three.js  </i>的开源 CAD 转 3D 编辑器。


            </Box>
            <Box sx={{
                marginTop: '20px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                color: 'black',
                fontSize: '32px',

                lineHeight: 1.25,
                zIndex: 100
            }}>
                内置智慧家装、BIM建模、数字大屏，智慧城市、web游戏, WebGPU示例。

            </Box>

            <Box sx={{
                marginTop: '40px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                color: 'black',
                fontWeight: '600',
                fontSize: '24px',
                lineHeight: 1.25,
                zIndex: 100
            }}>
                <i>Bim3d Editor Open source CAD to 3D editor based on webgpu/webgl/three.js.</i>
            </Box>
            <Box sx={{
                marginTop: '40px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                color: 'black',
                fontSize: '24px',
                fontWeight: '600',
                lineHeight: 1.25,
                zIndex: 100
            }}>
                <i>Built in smart home decoration, BIM modeling, digital twins, smart cities, web games, WebGPU examples.</i>
            </Box>

        </Box>

    )
}

export default AboutBox