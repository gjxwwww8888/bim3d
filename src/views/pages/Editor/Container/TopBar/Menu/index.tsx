import React from 'react'
import styled from 'styled-components'
import { Save } from '@styled-icons/bootstrap/Save'
import {New} from '@styled-icons/fluentui-system-regular/New'
import {Import} from '@styled-icons/boxicons-regular/Import'
import {Export} from '@styled-icons/boxicons-regular/Export'
import {Ruler} from '@styled-icons/remix-line/Ruler'
import {Clear} from '@styled-icons/material-rounded/Clear'

const MenuBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const MenuItem = styled.div`
    /* width: 60px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    height: 100%;
    color: #ccc;
    font-size: 10px;
    /* text-align: center; */
    /* line-height: 48px; */
    cursor: pointer;
    &:hover{
        color: #fff;
        background-color: rgb(242, 112, 19);
    }
`

const NewIcon = styled(New)`
    color: #fff;
    margin: 2px 0px;
`

const ImportIcon = styled(Import)`
    color: #fff;
    margin: 2px 0px;
`

const ExportIcon = styled(Export)`
    color: #fff;
    margin: 2px 0px;
`

const RulerIcon = styled(Ruler)`
    color: #fff;
    margin: 2px 0px;
`
const ClearIcon = styled(Clear)`
    color: #fff;
    margin: 2px 0px;
`

const menuData = [
    { id: '0', label: '新建',icon: <NewIcon size='16'/>},
    { id: '1', label: '导入',icon: <ImportIcon size='16'/> },
    { id: '2', label: '导出',icon: <ExportIcon size='16'/> },
    { id: '3', label: '测量',icon: <RulerIcon size='16'/> },
    { id: '4', label: '清空',icon: <ClearIcon size='16'/> }
]

const Menu = () => {

    const menuClick = (e: React.MouseEvent) => {
        let label = (e.target as any).innerHTML;
        console.log(label);
        switch (label) {
            case '新建':

                break;
            case '导入':

                break
            case '导出':

                break;
            case '测量':

                break;
            case '清空':

                break;
            default:
                break;
        }
    }

    return (
        <>
            <MenuBox>
                {
                    menuData.map((data) => {
                        return (
                            <MenuItem key={data.id} onClick={(e) => menuClick(e)}>
                                {data.icon}
                                {data.label}
                            </MenuItem>
                        )
                    })
                }
            </MenuBox>
        </>
    )
}

export default Menu