import React from 'react'
import styled from 'styled-components'

const ListInfoBox = styled.div`
    display:  flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 40px 0;
`

const BP = styled.span`
  margin: 10px;
  color: #333;
  font-size: 40px;
  font-weight: bold;
`

const SP = styled.span`
  margin: 20px 0;
  color: #555;
  font-size: 18px;  
`

const ListInfo = () => {
    return (
        <>
            <ListInfoBox>
                <BP>全智慧的3D可视化生态和元宇宙级数据交互方案</BP>
                <SP>数字化，智能化，可视化，低代码，无代码级别3D解决方案</SP>
            </ListInfoBox>

        </>
    )
}

export default ListInfo