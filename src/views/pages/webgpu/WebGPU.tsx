import Logo from '@/views/components/logo/Logo'
import React from 'react'
import styled from 'styled-components'


const EpContainer = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
`

const EpLift = styled.div`
    width:  260px;
    /* min-width: 260px; */
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;
    background-color: #eee;
`

const EpRight = styled.div`
    width:  calc(100vw - 260px);
    height: 100vh;
    display: flex;
    margin: 0;
    /* background-color: black; */
`

const LogoBox = styled.div`
    width: 100%;
    margin: 10px -20px;
`



const LFtitle = styled.span`
    width: 100%;
    height: 40px;
    color: #333;
    line-height: 30px;
    font-size: 18px;
    margin: 10px 20px;
    font-weight: 300;
`

const LFmenu = styled.div`
    width: 100%;

`
const LFbutton = styled.button`
    display: block;
    background-color: inherit;
    color: black;
    font-weight:bold;
    padding: 10px 40px;
    width: 100%;
    border: none;
    outline: none;
    text-align: left;
    cursor: pointer;
    transition: 0.3s;
    font-size: 16px;
    &:hover{
        background-color: #ddd;
    }
    &.active {
        background-color: #ccc;
    }
`


const LFData = [
    { id: 0, label: "triangle" },
    { id: 1, label: "rectangle" },
    { id: 2, label: "box" },
    { id: 3, label: "ball" },
    { id: 4, label: "colors" }
]



const WebGPU = () => {
    return (
        <EpContainer>
            <EpLift>
                <LogoBox>
                    <Logo></Logo>
                </LogoBox>
                <LFtitle>WebGPU Example</LFtitle>
                <LFmenu>
                    {
                        LFData.map((data) => {
                            return <LFbutton key={data.id} >{data.label}</LFbutton>
                        })
                    }
                </LFmenu>
            </EpLift>
            <EpRight>
                {/* <span>webgpu</span> */}
            </EpRight>
        </EpContainer>
    )
}

export default WebGPU