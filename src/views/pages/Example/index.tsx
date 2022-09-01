import React from 'react'
import styled from 'styled-components'
import LeftBar from './LeftBar'
import RightShow from './RightShow'

const ExampleBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`

const Example:React.FC = () => {
  return (
    <>
      <ExampleBox>
        <LeftBar></LeftBar>
        <RightShow></RightShow>
      </ExampleBox>
    </>
  )
}

export default Example