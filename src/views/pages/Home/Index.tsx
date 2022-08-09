
import React from 'react'
import styled from 'styled-components';
import Logo from './Logo';

const Header = styled.div`
    display: flex;
    background-color: '#181818';
    width: 100%;
    height: 64px;
    color: red;
`

const Home: React.FC = () => {
    return (
        <>
            <Header>
                <Logo />
            </Header>
        </>
    )
}

export default Home;