import React from 'react'
import styled from 'styled-components'
import ButtonGroup from './ButtonGroup'
import Introduce from './Introduce'

const Main = styled.div`
    position: relative;
    margin-top: 64px;
    background-color: white;
    overflow: hidden;
    height: 580px;
    z-index: 1;
`
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

const IntroduceBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 580px;
    padding: 96px 32px;
    color:rgb(38,38,38);
    align-items: center;
    justify-content: center;
    /* background-color: rgb(73, 73, 73); */
    overflow: hidden;
    z-index: 1;
`

const MainBox: React.FC = () => {
  return (
    <>
      <Main>
        <Container>
          <IntroduceBox>
            <Introduce />
            <ButtonGroup />
          </IntroduceBox>
        </Container>
      </Main>
    </>
  )
}

export default MainBox;