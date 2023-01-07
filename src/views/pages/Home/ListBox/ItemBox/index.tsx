import { Building } from '@styled-icons/bootstrap/Building'
import { Flower2 } from '@styled-icons/bootstrap/Flower2'
import { Navigation } from '@styled-icons/boxicons-regular/Navigation'
import { Factory } from '@styled-icons/boxicons-solid/Factory'
import { Communication } from '@styled-icons/fluentui-system-filled/Communication'
import { BuildingHome } from '@styled-icons/fluentui-system-regular/BuildingHome'
import { Games } from '@styled-icons/fluentui-system-regular/Games'
import { ProjectionScreen } from '@styled-icons/fluentui-system-regular/ProjectionScreen'
import { LocationCity } from '@styled-icons/material/LocationCity'
import React, { useState } from 'react'
import styled from 'styled-components'
import BIMItem from './BIMItem'
import HomeDesign from './HomeDesign'

const TabBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TabCenter = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 70%;
  border-bottom: 2px solid #ccc;
`;

const TabLine = styled.div`
  position: absolute;
  top: 90px;
  left: 0px;
  width: 100px;
  height: 4px;
  background-color: rgb(242, 112, 19);
  border-radius: 10px;
  transition: all .3s ease-in-out;
`

const MenuItem = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    padding: 0 20px;
    min-width: 24px;
    height: 100%;
    color: #555;
    font-size: 14px;
    cursor: pointer;
    &:hover{
        color: rgb(242, 112, 19);
    }
   
`

const BIMIcon = styled(Building)`
    color: #555;
    margin: 10px 0px;
`

const BuildingHomeIcon = styled(BuildingHome)`
    color: #555;
    margin: 10px 0px;
`

const ProjectionScreenIcon = styled(ProjectionScreen)`
    color: #555;
    margin: 10px 0px;
`

const LocationCityIcon = styled(LocationCity)`
    color: #555;
    margin: 10px 0px;
`

const CommunicationIcon = styled(Communication)`
    color: #555;
    margin: 10px 0px;
`

const FactoryIcon = styled(Factory)`
    color: #555;
    margin: 10px 0px;
`

const Flower2Icon = styled(Flower2)`
    color: #555;
    margin: 10px 0px;
`

const GamesIcon = styled(Games)`
    color: #555;
    margin: 10px 0px;
`

const NavigateIcon = styled(Navigation)`
    color: #555;
    margin: 10px 0px;
`

const MenuData = [
  { id: '0', label: 'BIM建模', icon: <BIMIcon size='32' /> },
  { id: '1', label: '智能家装', icon: <BuildingHomeIcon size='32' /> },
  { id: '2', label: '数字大屏', icon: <ProjectionScreenIcon size='32' /> },
  { id: '3', label: '智慧城市', icon: <LocationCityIcon size='32' /> },
  { id: '4', label: '物联网', icon: <CommunicationIcon size='32' /> },
  { id: '5', label: '工业科技', icon: <FactoryIcon size='32' /> },
  { id: '6', label: '农业自动化', icon: <Flower2Icon size='32' /> },
  { id: '7', label: 'web游戏', icon: <GamesIcon size='32' /> },
  { id: '8', label: 'AI导航', icon: <NavigateIcon size='32' /> }
]

const ShowItem = (props)=>{
    const index = props.index;
    if(index === 0){
      return <BIMItem/>
    }
    else if(index === 1){
      return <HomeDesign/>
    }
}

const ItemBox = () => {

  let linkbar = React.createRef<HTMLDivElement>();

  // let navigate = useNavigate();

  const [index, setIndex] = useState(0);

  const menuClick = (e: React.MouseEvent) => {

    let label = (e.target as any).outerText;
    if (linkbar) {
      linkbar.current.style.width = (e.target as any).offsetWidth + 'px';
      linkbar.current.style.left = (e.target as any).offsetLeft + 'px';
    }

    switch (label) {
      case 'BIM建模':
        // navigate('/course')
        setIndex(0)
        break;
      case '智能家装':
        // navigate('/document')
        setIndex(1)
        break
      case '数字大屏':
        // navigate('/example')
        setIndex(2)
        break;
      case '智慧城市':
        // navigate('/example')
        setIndex(3)
        break;
      case '物联网':
        // navigate('/example')
        break;
      case '工业科技':
        // navigate('/example')
        break;
      case '农业自动化':
        // navigate('/example')
        break;
      case 'web游戏':
        // navigate('/example')
        break;
      case 'AI导航':
        // navigate('/example')
        break;
      default:
        break;
    }
  }

  return (
    <>
      <TabBox>
        <TabCenter>
          {
            MenuData.map(data => {

              return (
                <MenuItem key={data.id} onMouseOver={(e) => menuClick(e)}>
                  {data.icon}
                  {data.label}
                </MenuItem>
              )
            })
          }
          <TabLine ref={linkbar}></TabLine>

          
        </TabCenter>
        <ShowItem index={index}/>

      </TabBox>

    </>
  )
}

export default ItemBox