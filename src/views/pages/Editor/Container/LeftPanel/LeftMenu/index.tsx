import MenuItem from '@/views/component/MenuItem'
import React from 'react'
import styled from 'styled-components'
import { Building2 } from '@styled-icons/remix-line/Building2'

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

const BIMMenu = [
  { id: 'bim1', label: '画墙', icon: <Building2Icon size='16' /> },
  { id: 'bim1', label: '弧墙', icon: <Building2Icon size='16' /> },
  { id: 'bim1', label: '异形墙', icon: <Building2Icon size='16' /> },
  { id: 'bim1', label: '横梁', icon: <Building2Icon size='16' /> },
  { id: 'bim1', label: '楼板', icon: <Building2Icon size='16' /> },
  { id: 'bim1', label: '异形楼板', icon: <Building2Icon size='16' /> },
  { id: 'bim1', label: '方形柱', icon: <Building2Icon size='16' /> },
  { id: 'bim1', label: '圆柱柱', icon: <Building2Icon size='16' /> },
  { id: 'bim1', label: '异形柱', icon: <Building2Icon size='16' /> },
  { id: 'bim1', label: '单跑楼梯', icon: <Building2Icon size='16' /> },
  { id: 'bim1', label: '双跑楼梯', icon: <Building2Icon size='16' /> },
  { id: 'bim1', label: '剪刀楼梯', icon: <Building2Icon size='16' /> },
  { id: 'bim1', label: '墙洞', icon: <Building2Icon size='16' /> },
  { id: 'bim1', label: '板洞', icon: <Building2Icon size='16' /> }
]



const LeftMenu = () => {
  return (
    <>
      <LeftMenuBox>
        <BIMMenuBox>
          {
            BIMMenu.map((data) => {
              return <MenuItem key={data.id} icon={data.icon} label={data.label} ></MenuItem>
            })
          }
        </BIMMenuBox>


      </LeftMenuBox>
    </>
  )
}

export default LeftMenu