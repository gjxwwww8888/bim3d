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
    return (
        <>
            <MenuBox>
                {props.icon}
                {props.label}
            </MenuBox>
        </>
    )
}

export default MenuItem