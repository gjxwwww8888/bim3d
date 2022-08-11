import BIM from '@/editor';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MenuBox = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const MenuButton = styled.button`
    border: 0;
    color: white;
    margin: 0 20px;
    background: none;
    &:hover{
        color: rgb(9, 109, 217);
    }
`;

const LoginBtn = styled.button`
    border: 0;
    color: white;
    width: 84px;
    height: 32px;
    margin: 0 20px;
    border-radius: 6px;
    background: rgb(9, 109, 217);
    &:hover{
        background: rgb(31, 137, 250);
    }
`;

const menudata = [
    { id: "5", lable: '登录' },
    { id: "4", lable: '编辑器' },
    { id: "3", lable: '示例' },
    { id: "2", lable: '文档' },
    { id: "1", lable: '教程' }
];

const Menu: React.FC = () => {

    let navigate = useNavigate();

    const dealEditor = ()=>{
      
        navigate('/editor');
    }

    const menuClick = (e: React.MouseEvent) => {
        let label = (e.target as any).innerHTML;
        switch (label) {
            case '教程':
                navigate('/course')
                break;
            case '文档':
                navigate('/document')
                break
            case '示例':
                navigate('/example')
                break;
            case '编辑器':
                dealEditor();
                
                break;
            default:
                break;
        }
    }

    const loginClick = () => {
        navigate('/login')
    };

    return (
        <>
            <MenuBox>
                {
                    menudata.map(data => {
                        if (parseInt(data.id) === menudata.length) {
                            return <LoginBtn key={data.id} onClick={loginClick}>登 录</LoginBtn>
                        }
                        else {
                            return <MenuButton key={data.id} onClick={(e) => menuClick(e)}>{data.lable}</MenuButton>
                        }
                    })
                }
            </MenuBox>
        </>
    )
};

export default Menu;