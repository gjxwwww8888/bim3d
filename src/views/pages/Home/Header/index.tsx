import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    display: flex;
    position: fixed;
    top: 0px;
    justify-content:center;
    align-items: center;
    width: 100%;
    height: 64px;
    color: red;
    background: rgb(18,18,18);
    z-index: 5;
`

const Layout = styled.div`
    display: flex;
    background: yellow;
    height: 32px;
    width: 80%;
    flex-direction: row;
`

const LogoBox = styled.div`
    background: red;
    height: 100%;
    width: 100%;
`
const MenuBox = styled.div`
    background: blue;
    height: 100%;
    width: 100%;
`


const HeaderBox:React.FC = () => {
    return (
        <>
           <Header>
                <Layout>
                    <LogoBox>

                    </LogoBox>
                    <MenuBox>

                    </MenuBox>
                </Layout>

            </Header>
        </>
    )
}

export default HeaderBox