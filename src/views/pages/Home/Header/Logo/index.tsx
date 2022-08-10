import React from 'react'
import { Sketch } from '@styled-icons/boxicons-logos/Sketch'
import styled from 'styled-components'

const LogoBox = styled.div`
    display: flex;
    align-items: flex-end;
    height: 100%;
    width: 100%;
    color: white;
    font-size: 1.2rem;
    line-height: 1.57;
    font-family: "Public Sans", sans-serif;
    font-weight: 400;
    text-align: left;
`

const BlueSketch = styled(Sketch)`
  color: rgb(9, 109, 217);
  margin: 0 5px;
`

const Logo: React.FC = () => {
  return (
    <>
      <LogoBox>
        <BlueSketch title='Sketch Icon' size='32' />
        <span>Bim3dEditor</span>
      </LogoBox>

    </>
  )
}

export default Logo