import React from 'react'
import styled from 'styled-components'

const TP = styled.span`
  font-size: 80px;
  line-height: 100px;
  font-weight: bolder;

  background-image: linear-gradient(to right, #f80707, #ff9a02);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
    
`

const BP = styled.span`
  margin: 10px;
  color: #333;
  font-size: 50px;
  font-weight: bolder;
  
`

const SP = styled.span`
  margin: 20px 0;
  color: #555;
  font-size: 18px;
  font-weight: bold;
  
`

const Introduce: React.FC = () => {
  return (
    <>
      <TP>一站式</TP>
      <BP> 开源WebGL3D项目 </BP>
      <SP>Bim3dEditor 使用流行的前端框架 React.js 和优秀的3D库 Three.js 打造在线可编辑的3D可视化工具。</SP>
    </>
  )
}

export default Introduce