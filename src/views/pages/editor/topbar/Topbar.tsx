import Logo from '@/views/components/logo/Logo'
import React from 'react'
import styled from 'styled-components'
import TopMenu from './TopMenu'
import UserMenu from './UserMenu'



const TopBarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 48px;
  background-color: rgb(18,18,18);
`

const TopBar = () => {
    return (
        <>
            <TopBarBox>
                <Logo primary={false} />
                <TopMenu />
                <UserMenu />
            </TopBarBox>
        </>
    )
}

export default TopBar