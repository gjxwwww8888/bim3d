// import { toggleTheme } from '@/views/store/user';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const MenuBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const MenuButton = styled.button`
    border: 0;
    background: none;
    text-transform: uppercase;
    color: rgb(38,38,38);
    font-weight: 500;
    font-size: 14px;
    position: relative;
    outline: none;
    padding: 10px 20px;
    box-sizing: border-box;

    &:hover{
        color: rgb(242, 112, 19);
    }
    /* &::before, &::after{
        box-sizing: inherit;
        position: absolute;
        content: '';
        border: 2px solid transparent;
        width: 0;
        height: 0;  
    }
    &::after{
        bottom: 0;
        right: 0;
    }
    &::before {
        top: 0;
        left: 0;
    }
    &:hover::before, &:hover::after {
        width: 100%;
        height: 100%;
    }
    &:hover::before{
        border-top-color: rgb(242, 112, 19);
        border-right-color: rgb(242, 112, 19);
        transition: width 0.1s ease-out, height 0.1s ease-out 0.1s;
    }
    &:hover::after {
        border-bottom-color: rgb(242, 112, 19);
        border-left-color: rgb(242, 112, 19);
        transition: border-color 0s ease-out 0.3s, width 0.1s ease-out 0.3s, height 0.1s ease-out 0.5s;
    } */
`;


import { useNavigate } from 'react-router-dom';


const menudata = [
    
    { id: "0", lable: '文档' },
    { id: "1", lable: 'API' },
    { id: "2", lable: '示例' },
    { id: "3", lable: '赞助' },
    { id: "4", lable: '合作开发' }
];

const Menu: React.FC = () => {

    let navigate = useNavigate();

    const dealEditor = ()=>{
      
        navigate('/editor');
    }

    const dispatch = useDispatch();
    // function changeTheme(){
    //     dispatch(toggleTheme())
    // }

    const menuClick = (e: React.MouseEvent) => {
        let label = (e.target as any).innerHTML;
        switch (label) {
            case '文档':
                navigate('/doc')
                break;
            case 'API':
                // navTo('/document')
                break
            case '示例':
                navigate('/webgpu')
                break;
            case '赞助':
                dealEditor();
                break;
            case '合作开发':
                // changeTheme();
                break;
            default:
                break;
        }
    }

   

    return (
        <>
            <MenuBox>
                {
                    menudata.map(data => {
                        // if (parseInt(data.id) === 0) {
                        //     return <LoginBtn key={data.id} onClick={loginClick}>登 录</LoginBtn>
                        // }
                        // else {
                            return <MenuButton key={data.id} onClick={(e) => menuClick(e)}>{data.lable}</MenuButton>
                        // }
                    })
                }
            </MenuBox>
        </>
    )
};

export default Menu;