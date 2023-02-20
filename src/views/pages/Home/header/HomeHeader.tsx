import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'

const Header = styled.div`
    overflow: hidden;
    display: flex;
    position: fixed;
    top: 0px;
    justify-content:center;
    align-items: center;
    width: 100%;
    height: 64px;
    color: red;
    background-color: white;
    z-index: 5;
    border-bottom:1px solid #e0e0e0;
`

const Layout = styled.div`
    display: flex;

    height: 32px;
    width: 70%;
    flex-direction: row;

`

const HeaderBox: React.FC = () => {
    
    return (
        <>
            <Header>
                <Layout>
                    <Logo primary={false}/>
                    <Menu />
                    <Search></Search>
                    
                </Layout>
            </Header>
        </>
    )
}

export default HeaderBox