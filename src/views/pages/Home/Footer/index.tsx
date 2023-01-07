import React from 'react'
import styled from 'styled-components'
import IconGroup from './IconGroup'


const FooterBox = styled.div`

    position: relative;
    background-color: white;
    overflow: hidden;
    height: 500px;
    z-index: 1;
`

const FooterContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height:  380px;
    z-index: 1;
`

const FooterTips = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px 0 ;
    z-index: 1;
`

const SP = styled.span`
  margin: 20px 0;
  color: #555;
  font-size: 18px;
 
`

const TP = styled.span`
  margin: 4px 0;
  color: #555;
  font-size: 12px;
`

const ALink = styled.a`
  color: #ff5e00;
`

const SpliceLine = styled.hr`
  height:1px;
  border:none;
  border-top:1px solid #ccc;
`

const Shengming = styled.span`
    color: black;
    font-size: 14px;
    font-weight: bold;
    margin: 0 0 5px 0;
`


const Footer: React.FC = () => {
  return (
    <>
      <FooterBox>
        <FooterContainer>
          <SP>订阅我们的开发新闻。</SP>
          <IconGroup></IconGroup>
          <FooterTips>
            <TP>你可以在 <ALink href="https://gitee.com/songmy1093697597/bim3d-editor" target='blank'>bim3d-editor</ALink> 阅读之前的更新并查阅我们的开发进度。你也可以在 <ALink href="https://gitee.com/songmy1093697597" target='blank'>gitee</ALink> 关注我们，</TP>
            <TP>或加入我们的开源项目贡献代码。</TP>
          </FooterTips>
         
        </FooterContainer>
        <SpliceLine/>
        <FooterTips>
            <Shengming>版权声明</Shengming>
            <TP>本网站内容版权为bim3d-editor开发团队及开源贡献者所有，保留所有权利。</TP>
        </FooterTips>
      </FooterBox>
    </>
  )
}

export default Footer