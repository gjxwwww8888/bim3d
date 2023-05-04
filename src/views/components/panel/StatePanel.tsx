import BIM from '@/editor/BIM';
import React from 'react';
import styled from 'styled-components';

const StateBox = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    top: 50px;
    right: 270px;
    width: 170px;
    margin: 0;
    padding: 8px 8px 10px 10px;
    background-color: rgba(200, 200, 200, 0.7);
    border-radius: 8px;
    backdrop-filter: blur(2px);
`

const StateLabel = styled.span`
    color: #ffffff;
    font-size: 12px;
    line-height: 1.5;
`

class StatePanel extends React.Component<any, IStatePanel> {
    constructor(props:any) {
        super(props);
        this.state = {
            geometries: 0,
            textures: 0,
            triangles: 0,
            points: 0,
            lines: 0,
            fps: 0,
            ms: 0,
            mb: 0
        };
    }

    private onRenderUpdate(data: IStatePanel): void {
        this.setState({
            geometries: data.geometries,
            textures: data.textures,
            triangles: data.triangles,
            points: data.points,
            lines: data.lines,
            fps: data.fps,
            ms: data.ms,
            mb: data.mb // 只有谷歌比较骚，可以用
        })
    }

    componentDidMount() {
        BIM.ED.on(BIMEvent.RENDER_UPDATE, this, this.onRenderUpdate)
    }
    componentWillUnmount() {
        BIM.ED.off(BIMEvent.RENDER_UPDATE, this, this.onRenderUpdate)
    }

    render() {
        return (
            <StateBox>
                <StateLabel>geometries：{this.state.geometries} </StateLabel>
                <StateLabel>textures：{this.state.textures} </StateLabel>
                <StateLabel>triangles：{this.state.triangles} </StateLabel>
                <StateLabel>points：{this.state.points} </StateLabel>
                <StateLabel>lines：{this.state.lines} </StateLabel>
                <StateLabel>fps：{this.state.fps} </StateLabel>
                <StateLabel>ms：{this.state.ms} </StateLabel>
                <StateLabel>mb：{this.state.mb} </StateLabel>
            </StateBox>
        );
    }
}

export default StatePanel