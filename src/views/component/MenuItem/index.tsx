import BIM from '@/editor/BIM'
import { UIEvent } from '@/libs/const/enum'
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
    color: white;
    background-color: rgb(54,54,54);
    &:hover{
        background-color: rgb(100,100,100);
    }
`



const MenuItem = (props:any) => {

    const onMenuClick = (e:any)=>{
        let menuLabel = e.target.innerText;
        console.log('点击了'+menuLabel);
        BIM.ED.event(UIEvent.LEFT_MENU_ITEM_CLICK, [menuLabel]);
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