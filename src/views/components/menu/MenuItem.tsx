import BIM from '@/editor/BIM'
import React from 'react'
import styled from 'styled-components'

const MenuBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 80px;
    margin: 5px;
    color: black;
    font-size: 12px;
    background-color: #ddd;
    border-radius: 10px;
    &:hover{
        background-color: #eee;
    }
`



const MenuItem = (props:any) => {

    const onMenuClick = (e:any)=>{
        let menuLabel = e.target.innerText;
        console.log('点击了'+menuLabel);
        BIM.ED.event(BIMEvent.LEFT_SUB_MENU_MODLE_CLICK, [menuLabel]);
    }

    return (
        <>
            <MenuBox onClick={(e)=>onMenuClick(e)}>
                {props.icon}
                {props.label}
            </MenuBox>
        </>
    )
}

export default MenuItem