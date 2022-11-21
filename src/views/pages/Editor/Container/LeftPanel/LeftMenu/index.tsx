import MenuItem from '@/views/components/MenuItem'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Building2 } from '@styled-icons/remix-line/Building2'
import { useSelector } from 'react-redux'
import { RootState } from '@/views/store'

const LeftMenuBox = styled.div`
  width: 220px;
  height: 100%;
  background-color: rgb(38,38,38);
  border-radius: 0 5px 5px 0;
`

const BIMMenuBox = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-flow: row wrap;
  width: 100%;
  /* margin: 10px; */
  
`

const Building2Icon = styled(Building2)`
    color: white;

`

const menuData = {
  sd1: [
    { id: 'bim1', label: '画墙', icon: <Building2Icon size='16' /> },
    { id: 'bim2', label: '弧墙', icon: <Building2Icon size='16' /> },
    { id: 'bim3', label: '异形墙', icon: <Building2Icon size='16' /> },
    { id: 'bim4', label: '横梁', icon: <Building2Icon size='16' /> },
    { id: 'bim5', label: '楼板', icon: <Building2Icon size='16' /> },
    { id: 'bim6', label: '异形楼板', icon: <Building2Icon size='16' /> },
    { id: 'bim7', label: '方形柱', icon: <Building2Icon size='16' /> },
    { id: 'bim8', label: '圆柱柱', icon: <Building2Icon size='16' /> },
    { id: 'bim9', label: '异形柱', icon: <Building2Icon size='16' /> },
    { id: 'bim10', label: '单跑楼梯', icon: <Building2Icon size='16' /> },
    { id: 'bim11', label: '双跑楼梯', icon: <Building2Icon size='16' /> },
    { id: 'bim12', label: '剪刀楼梯', icon: <Building2Icon size='16' /> },
    { id: 'bim13', label: '墙洞', icon: <Building2Icon size='16' /> },
    { id: 'bim14', label: '板洞', icon: <Building2Icon size='16' /> }
  ],
  sd2: [
    { id: 'bim1', label: '贴图', icon: <Building2Icon size='16' /> },
    { id: 'bim2', label: '颜色', icon: <Building2Icon size='16' /> }
  ],
  sd3: [
    { id: 'bim1', label: '物品', icon: <Building2Icon size='16' /> },
    { id: 'bim2', label: '场景', icon: <Building2Icon size='16' /> },
    { id: 'bim3', label: '人物', icon: <Building2Icon size='16' /> }
  ],
  sd4: [
    { id: 'bim1', label: '图纸', icon: <Building2Icon size='16' /> },
    { id: 'bim2', label: '清单', icon: <Building2Icon size='16' /> }
  ]
}

const LeftMenu = () => {

  const menuidex = useSelector((state: RootState) => state.editor.idx);

  return (
    <>
      <LeftMenuBox>
        <BIMMenuBox>
          {
            menuData[menuidex].map((data) => {
              return <MenuItem key={data.id} icon={data.icon} label={data.label}></MenuItem>
            })
          }
        </BIMMenuBox>
      </LeftMenuBox>
    </>
  )
}

export default LeftMenu