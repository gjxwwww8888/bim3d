
import { IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TopMenuBtn = (props) => {

    const [disable, setDisabled] = useState(false);
    let navTo = useNavigate();

    useEffect(() => {

        // BN.ED.on(UIEvent.COMMAND_CHANGED, this, onCommandChange);
        return () => {
            // BN.ED.off(UIEvent.COMMAND_CHANGED, this, onCommandChange);
        }
    });

    const onCommandChange = (undo = 0, redo = 0) => {
        if (props.label === "撤销") {
            setDisabled(undo == 0);
        }
        else if (props.label === "回退") {
            setDisabled(redo == 0);
        }
    }

    const btnClicked = () => {
        if (props.label === '截图') {
           
        }
        else if (props.label === "撤销") {
          
        }
        else if (props.label === "回退") {
           
        }
        else if (props.label === "报价") {
            
        }
    }

    return (
        <>
            <IconButton disabled={disable} aria-label={props.arialabel} sx={{ flexDirection: 'column', fontSize: '12px', margin: '0 10px' }} onClick={btnClicked}>
                {props.icon}
                {props.label}
            </IconButton>

        </>
    )
}

export default TopMenuBtn