import Logo from '@/views/pages/Home/Header/Logo'
import React from 'react'
import styled from 'styled-components'

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40px;
    margin: 20px 0;
    /* background-color: yellow; */
`

const TilteInfo = styled.span`
    color: #333;
    font-size: 18px;
    font-weight: bold;
    line-height: 18px;
    padding-left: 20px;
`

const SubTitle = styled(TilteInfo)`
    font-weight: 100;
    margin: 16px 0 0 16px;
`

const TitleInfo = () => {
    return (
        <>
            <TitleBox>
                <TilteInfo>Bim3dEditor</TilteInfo>
                <SubTitle>Example</SubTitle>
            </TitleBox>
        </>
    )
}

export default TitleInfo