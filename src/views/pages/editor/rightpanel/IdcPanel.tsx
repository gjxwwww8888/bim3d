import React from 'react'
import styled from 'styled-components'

const IdcPanelBox = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 240px;
    height: 250px;
    background-color: rgba(224, 224, 224, 0.7);
    backdrop-filter: blur(2px);
    border-radius: 10px;
`

const IdcPanel = () => {
    return (
        <>
            <IdcPanelBox>

            </IdcPanelBox>
        </>
    )
}

export default IdcPanel