import BIM from '@/editor/BIM'
import { ViewInAr } from '@styled-icons/material-outlined/ViewInAr'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 30px 0;
`

const BorderButton = styled.button`

    border: 1px solid rgb(242, 112, 19);
    color: rgb(242, 112, 19);
    width: 140px;
    height: 42px;
    margin: 0 20px;
    border-radius: 6px;
    background: white;
    &:hover{
        color: white;
        background: rgb(248, 140, 64);
    }
`

const NormalButton = styled.button`
    width: 140px;
    height: 42px;
    color: white;
    background: rgb(242, 112, 19);
    font-size: 16px;
    text-align: center;
    margin: 0 20px;
    border: 0;
    border-radius: 5px 5px;
    &:hover{
       
        background: red;
    }
`
const ViewInArIcon = styled(ViewInAr)`
    color: #ccc;
    margin-right: 10px;
    padding-bottom: 2px;
   
`

const ButtonGroup: React.FC = () => {

    let navigate = useNavigate();
    function gotoEditor() {
        // 3d
        new BIM().startUp();
        navigate('/editor')
    }

    return (
        <>
            <ButtonBox>
                <a href="https://gitee.com/songmy1093697597/bim3d-editor" target="_blank">
                    <BorderButton>导出项目</BorderButton>
                </a>
                <NormalButton onClick={gotoEditor}>
                    <ViewInArIcon size='16' />
                    预览编辑
                </NormalButton>
            </ButtonBox>
        </>
    )
}

export default ButtonGroup