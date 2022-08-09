import React from 'react'
import styled from 'styled-components'

const Main = styled.div`

    position: relative;
    background-color: rgb(38, 38, 38);
    overflow: hidden;
    min-height: 100vh;
    z-index: 1;
`

const MainBox:React.FC = () => {
  return (
    <>
        <Main></Main>
    </>
  )
}

export default MainBox;