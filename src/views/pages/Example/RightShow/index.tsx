import BIM from '@/editor/BIM';
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const RightShowBox = styled.div`
    width: calc(100vw - 300px);
    height: 100%;
`


const RightShow = () => {

    const exampleShow = useRef(null);

    useEffect(()=>{
    
        // 挂载
        if(exampleShow){
            BIM.example = exampleShow.current;
            BIM.SC.scene.mountedExampleScene();
        }
        // 卸载
        return ()=>{
            console.log('example unmount')
        }
    })

    return (
        <>
            <RightShowBox ref={exampleShow} >
                
            </RightShowBox>
        </>
    )
}

export default RightShow