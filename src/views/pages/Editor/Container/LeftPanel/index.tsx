import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'

const LeftContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

const LeftPanel = () => {
  return (
    <>
        <LeftContainer>
            <SideBar></SideBar>
        </LeftContainer>
    </>
  )
}

export default LeftPanel