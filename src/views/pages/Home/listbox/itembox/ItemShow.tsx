import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const NormalButton = styled.button`
    width: 140px;
    height: 42px;
    color: white;
    background: rgb(242, 112, 19);
    font-size: 16px;
    text-align: center;
    margin: 0 20px;
    border: 0;
    border-radius: 5px 5px;
    &:hover{
       
        background: red;
    }
`

const ItemContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.7);
    overflow: hidden;
    width: 0;
    height: 100%;
    border-radius: 20px;
    transition: .5s ease;
`

const ShowBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    width: 1280px;
    height: 720px;
   
    &:hover div${ItemContainer}{
       width: 100%;
    }
`


const ItemImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 20px;
`
const ItemInfo = styled.div`
    color: black;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    white-space: nowrap;
`

const ItemInfoBox = styled.div`
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


const ItemShow = (props) => {

    const navigate = useNavigate();

    const onBtnClick = (label) => {
        console.log(label)
        switch (label) {
            case "3":
                navigate('/smartcity');
                break;
        }
    }

    return (
        <ShowBox>
            <ItemImage src={props.imgurl} />
            <ItemContainer>
                <ItemInfo>
                    <ItemInfoBox>
                        <BP> {props.title}</BP>
                        <SP> {props.text}</SP>

                        <NormalButton onClick={() => onBtnClick(props.label)}>开始设计</NormalButton>
                    </ItemInfoBox>
                </ItemInfo>
            </ItemContainer>
        </ShowBox>
    )
}

export default ItemShow