import BIM from '@/editor/BIM'
import StatePanel from '@/views/components/panel/StatePanel'
import React from 'react'
import styled from 'styled-components'
import LeftPanel from './leftpanel/LeftPanel'
import RightPanel from './rightpanel/RightPanel'
import TopBar from './topbar/Topbar'

const TopBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 48px;
    cursor: pointer;
`
const LeftBox = styled.div`
    position: fixed;
    top: 48px;
    left: 0px;
    width: 288px;
    height: calc(100vh - 48px);
    cursor: pointer;
`

const RightBox = styled.div`
    position: fixed;
    top: 48px;
    right: 0px;
    width: 240px;
    height: calc(100vh - 48px);
    cursor: pointer;
`

const IdcBox = styled.div`
    position: fixed;
    top: 48px;
    right: 240px;
    width: 100px;
    height: 100px;
    /* background-color: yellow; */
`


/**
 * important: 这个不走函数组件的useEffect，走class 组件的生命周期函数来控制3D
 */
class Editor extends React.Component {

    private _bim:BIM;

    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        console.log('editor mounted')
        BIM.exit();
        BIM.startUp();

        let bimcontainer: HTMLElement = document.getElementById('bim');
        BIM.container = bimcontainer;

        BIM.SC.scene.mountedMainScene();
    }

    componentWillUnmount(): void {
        console.log('idc unmount')
        BIM.exit();
    }

    render() {
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
                <IdcBox>

                </IdcBox>
                <StatePanel></StatePanel>
            </>
        )
    }
}

export default Editor