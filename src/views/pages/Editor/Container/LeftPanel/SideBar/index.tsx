import React from 'react'
import styled from 'styled-components'

const SideBarBox = styled.div`
   
    width: 44px;
    height: 100%;
    background-color: yellowgreen;
`
const LeftMenuItem = styled.li`
    
`

const leftMenu = [
    { id: 'sd1', label: "结构" },
    { id: 'sd1', label: "材质" },
    { id: 'sd1', label: "模型" },
    { id: 'sd1', label: "图纸" }
];

const SideBar = () => {
    return (
        <>
            <SideBarBox>
                <ul>
                    {
                        leftMenu.map((data) => {
                            return <></>
                        })
                    }
                </ul>
            </SideBarBox>
        </>
    )
}

export default SideBar