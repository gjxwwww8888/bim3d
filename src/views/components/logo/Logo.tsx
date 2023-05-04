import logoimg from '@/assets/image/bim.png';
import React from 'react';
import styled from 'styled-components';

interface LogoClor {
    primary: boolean;
}

const LogoBox = styled.div<LogoClor>`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    color: ${props => props.primary ? 'black' : 'white'};
    font-size: 1.2rem;
    line-height: 1.57;
    font-family: "Public Sans", sans-serif;
    font-weight: bold;
    text-align: left;
    margin: 0px 40px;
    
`

const LogoLabel = styled.span`
   color: rgb(48, 47, 47);
`

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background-size: 26px;
  background-repeat:no-repeat;
  background-image: url(${logoimg});
`

const Logo = (props: any) => {
    return (
        <>
            <LogoBox {...props}>
                <LogoIcon />
                <LogoLabel>Bim3dEditor</LogoLabel>
            </LogoBox>
        </>
    )
}

export default Logo