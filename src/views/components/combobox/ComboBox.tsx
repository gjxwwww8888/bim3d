
import React from 'react'
import styled from 'styled-components'

const Container = styled.div<{ pleft?: string }>`
    overflow: hidden;
    position: absolute;
    top: 49px;
    /* left: 0px; */
    margin-left: ${props => props.pleft};
    width: 140px;
    height: 0px;
    /* background-color: white; */
    background-color: rgba(225, 225, 225, 0.8);
    backdrop-filter: blur(2px);
    /* box-shadow: 0 0 3px rgb(102, 102, 102); */
    text-align: left;
    line-height: 40px;
    transition-duration: 300ms;
    z-index: 1000;
    color: black;
    border-radius: 5px;
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
`

const MenuItem = styled.li`
    width: 100%;
    height: 40px;
    margin: 0;
    left: 0;
    top: 0;
    &:hover {
        color: #444;
        background-color: #f5f3f3;
    }
`
const LabelItem = styled.span`
    padding-left: 10px;
`

/** 下拉菜单 */
const ComboBox = (props: any) => {


    const dealMiddleGround = () => {

        // navTo('/middle');
    }

    const subMenuClick = (label: string) => {
        console.log('submenu:', label);
        switch (label) {
            case "后台管理":
                dealMiddleGround();
                break;
        }
    }

    return (
        <>
            <Container pleft={props.pleft}>
                <ul>
                    {
                        props.menus.map((data) => {
                            return (
                                <MenuItem key={data.key} onClick={() => subMenuClick(data.label)}>
                                    <LabelItem>{data.label}</LabelItem>
                                </MenuItem>
                            )
                        })
                    }
                </ul>

            </Container>
        </>
    )
}

export default ComboBox;