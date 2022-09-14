import styled from 'styled-components'
import React, { useEffect, useRef } from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import TopBar from './TopBar'
import BIM from '@/editor/BIM'

const TopBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 48px;
    cursor: pointer;
`
const LeftBox = styled.div`
    position: absolute;
    top: 48px;
    left: 0px;
    width: 288px;
    height: calc(100vh - 48px);
    cursor: pointer;
`

const RightBox = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    width: 240px;
    height: calc(100vh - 48px);
    cursor: pointer;
`

const IdcBox = styled.div`
    position: absolute;
    top: 48px;
    right: 240px;
    width: 100px;
    height: 100px;
    /* background-color: yellow; */
`



const Container = () => {

    const idc = useRef(null);

    useEffect(()=>{
    
        // 挂载
        if(idc){
            BIM.idc = idc.current;
            BIM.SC.scene.mountedIdcScene();
        }
        // 卸载
        return ()=>{
            console.log('idc unmount')
        }
    })

    return (
        <>
            <TopBox>
                <TopBar></TopBar>
            </TopBox>
            <LeftBox>
                <LeftPanel></LeftPanel>
            </LeftBox>
            <RightBox>
                <RightPanel></RightPanel>
            </RightBox>
            <IdcBox ref={idc}>

            </IdcBox>
        </>
    )
}

export default Container