import React from 'react'
import styled from 'styled-components'

const MainBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: black;
    width: 100%;
    height: 80%;
    /* background-color: red; */
`
const CenterBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 400px;
    min-height: 512px;
    overflow: hidden;
    position: relative;
    border: none rgb(230, 235, 241);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 8%) 0px 1px 4px;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`
const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 370px;
    height:100%;
    background-color: #ccc;
`

const TitleBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Main = () => {
  return (
    <>
        <MainBox>
            <CenterBox>
            <FormBox>
                <TitleBox>
                    <span>登录</span>
                </TitleBox>
            </FormBox>
            </CenterBox>
        </MainBox>
    </>
  )
}

export default Main