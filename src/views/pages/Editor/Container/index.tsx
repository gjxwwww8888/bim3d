import React from 'react'
import styled from 'styled-components'
import RightPanel from './RightPanel'
import TopBar from './TopBar'

const ContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    z-index: 100;
`

const Container = () => {
    return (
        <>
            <ContainerBox>
                
                <TopBar></TopBar>
                <RightPanel></RightPanel>
            </ContainerBox>
        </>
    )
}

export default Container