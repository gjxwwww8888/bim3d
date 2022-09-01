import React from 'react'
import styled from 'styled-components'
import ExampleList from './ExampleList'
import TitleInfo from './TitleInfo'

const LeftBarBox = styled.div`
    width: 300px;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
`

const LeftBar = () => {
  return (
    <>
        <LeftBarBox>
            <TitleInfo></TitleInfo>
            <ExampleList></ExampleList>
        </LeftBarBox>
    </>
  )
}

export default LeftBar