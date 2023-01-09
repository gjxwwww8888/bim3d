import bgimg from '@/assets/image/bg/bg.jpg'
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
import ItemShow from './ItemShow'

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

const infoData = [
  { title: 'BIM建模 结构一览无余', text: '在线cad解析，可承载数十万个建筑结构，每个墙面，每个柱子都能流畅清晰的展现', imgurl: bgimg },
  { title: '智能家装 设计出图快人一步', text: '开源免费的家装设计解决方案，设计出图一键搞定。', imgurl: bgimg },
  { title: '数字大屏 展示演讲一步到位', text: '提供大屏适配方案，给你无限可能', imgurl: bgimg },
  { title: '智慧城市 规划设计尽在掌握', text: '展示街道和城市规划，可查看全国城市数据', imgurl: bgimg },
  { title: '助力物联 万物互通 ', text: '物联网下一个时代的风口', imgurl: bgimg },
  { title: '工厂生产 实时数据展示，监控生产每个细节', text: '对接工厂数据，实时展示生产细节', imgurl: bgimg },
  { title: '数字农业 实时展示自动化培育生产环节', text: '自动化，机械化，智能温控，未来农业科技的典范', imgurl: bgimg },
  { title: '畅游游戏世界 体验虚拟人生', text: '不止页游 跨平台才是游戏的未来！', imgurl: bgimg },
  { title: 'AI 导航 实时的地图路线规划', text: '提供地图导航的前端解决方案。', imgurl: bgimg }
]

const ShowItem = (props) => {
  const index = props.index;
  return <ItemShow
    label={MenuData[index].id}
    title={infoData[index].title}
    text={infoData[index].text}
    imgurl={infoData[index].imgurl}
  />
}

const ItemBox = () => {

  let linkbar = React.createRef<HTMLDivElement>();

  const [index, setIndex] = useState(0);

  const menuClick = (e: React.MouseEvent) => {

    let label = (e.target as any).outerText;
    if (linkbar) {
      linkbar.current.style.width = (e.target as any).offsetWidth + 'px';
      linkbar.current.style.left = (e.target as any).offsetLeft + 'px';
    }

    for (let idx = 0; idx < MenuData.length; idx++) {
      if (MenuData[idx].label === label) {
        setIndex(parseInt(MenuData[idx].id));
        break;
      }
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
        <ShowItem index={index} />

      </TabBox>

    </>
  )
}

export default ItemBox