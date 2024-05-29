import { Box } from '@mui/material';
import React, { useState } from 'react'
import { colorData } from '../../../data/ViewDatas';

const ColorSelect = () => {
    const [state, setState] = useState(0);

    const onColorClick = (data) => {
        console.log(data.color);
        setState(data.id);

        
    }

    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: '30px 30px 30px 30px 30px',
            gridTemplateRows: '30px 30px 30px 30px 30px',
            rowGap: '10px',
            columnGap: '10px',
            marginLeft: '10px'
        }}>
            {
                colorData.map(data => {
                    return <Box
                        sx={{
                            bgcolor: data.color,
                            borderRadius: '5px',
                            border: state === data.id ? 'solid black' : 'none'
                        }}
                        key={data.id}
                        onClick={(e) => onColorClick(data)}>

                    </Box>
                })
            }
        </Box>
    )
}

export default ColorSelect