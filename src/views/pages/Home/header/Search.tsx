import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const SerchInput = styled.input.attrs(props => ({
    type: 'text',
    placeholder: '搜索',

}))`
    margin: 0;
    width: 100px;
    height: 24px;
    padding: 0px;
    font-size: 14px;
    background-color: #ddd;
    border-radius: 5px;
    border: none;
    &:focus {
      
        outline-color:rgb(242, 112, 19);
    }
`

const LoginBtn = styled.button`
    border: 1px solid rgb(242, 112, 19);
    color: rgb(242, 112, 19);
    width: 96px;
    height: 36px;
    margin: 0 20px;
    border-radius: 6px;
    background: white;
    &:hover{
        color: white;
        background: rgb(248, 140, 64);
    }
`;


const Search = () => {

   
    const loginClick = () => {
        // navTo('/login')
    };

    return (
        <SearchContainer>
            <form>
                <SerchInput></SerchInput>
            </form>
            <LoginBtn onClick={loginClick}>免费使用</LoginBtn>
        </SearchContainer>
    )
}

export default Search