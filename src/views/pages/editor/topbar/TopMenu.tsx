import BIM from '@/editor/BIM'
import ComboBox from '@/views/components/combobox/ComboBox'
import { Export } from '@styled-icons/boxicons-regular/Export'
import { Import } from '@styled-icons/boxicons-regular/Import'
import { New } from '@styled-icons/fluentui-system-regular/New'
import { Clear } from '@styled-icons/material-rounded/Clear'
import { Ruler } from '@styled-icons/remix-line/Ruler'
import React from 'react'
import styled from 'styled-components'

const MenuBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
 
`

const MenuItem = styled.div<{ menuh?: string }>`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    min-width: 24px;
    height: 100%;
    color: black;
    font-size: 10px;
    /* text-align: center; */
    /* line-height: 48px; */
  
    cursor: pointer;
    &:hover{
        color: #5e5e5e;
        background-color: rgba(224, 224, 224, 0.7);
       

        div {
            height: ${props => props.menuh};
        }
    }
   
`

const NewIcon = styled(New)`
    color: black;
    margin: 2px 0px;
`

const ImportIcon = styled(Import)`
    color: black;
    margin: 2px 0px;
`

const ExportIcon = styled(Export)`
    color: black;
    margin: 2px 0px;
`

const RulerIcon = styled(Ruler)`
    color: black;
    margin: 2px 0px;
`
const ClearIcon = styled(Clear)`
    color: black;
    margin: 2px 0px;
`

const menuData = [
    {
        id: '0', label: '场景', icon: <NewIcon size='16' />, menus: [
            { key: 'doc1', label: "新建场景" },
            { key: 'doc2', label: "打开场景" },
            { key: 'doc3', label: "历史记录" },
            { key: 'doc4', label: "编辑场景" },
        ]
    },
    {
        id: '1', label: '导入', icon: <ImportIcon size='16' />, menus: [
            { key: 'export1', label: "导入模型" },
            { key: 'export2', label: "导入CAD" }

        ]
    },
    { id: '2', label: '导出', icon: <ExportIcon size='16' /> },
    {
        id: '3', label: '测量', icon: <RulerIcon size='16' />
    },
    {
        id: '4', label: '清空', icon: <ClearIcon size='16' />, menus: [
            { key: 'clear1', label: "底图" },
            { key: 'clear2', label: "模型" },
            { key: 'clear3', label: "全部" }
        ]
    }
]

const TopMenu = () => {

    function addPopPanel() {

    }

    const menuClick = (e: React.MouseEvent) => {
        let label = (e.target as any).innerText;
        console.log(label);
        switch (label) {
            case '场景':

                break;
            case '导入CAD':
                BIM.SC.cad.testCad();
                break
            case '导出':
                addPopPanel();
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
                    menuData.map((data: any) => {
                        return (
                            <MenuItem key={data.id} menuh={data.menus?.length * 40 + 'px'} onClick={(e) => menuClick(e)}>
                                {data.icon}
                                {data.label}
                                {data.menus && <ComboBox menus={data.menus} pleft={'74px'} />}
                            </MenuItem>
                        )
                    })
                }
            </MenuBox>
        </>
    )
}

export default TopMenu