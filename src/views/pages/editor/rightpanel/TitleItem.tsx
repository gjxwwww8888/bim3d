import React from 'react'
import styled from 'styled-components'

const TitleBox = styled.div`
    width: 100%;
    height: 40px;
    background-color: rgba(200, 200, 200, 0.7);
    backdrop-filter: blur(2px);
    border-radius: 8px 8px 0 0;
`

const TitleLabel = styled.span`
    margin-left: 10px;
    width: 100%;
    color:black;
    font-size: 15px;
    line-height: 40px;
    /* background-color:  #f3f3f3; */
`

const TitleItem = (props:any) => {
    return (
        <>
            <TitleBox>
                <TitleLabel>{props.label}</TitleLabel>
            </TitleBox>
        </>
    )
}

export default TitleItem