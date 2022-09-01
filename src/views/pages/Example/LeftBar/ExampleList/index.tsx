import React from 'react'
import styled from 'styled-components'

const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 40px;
    width: 260px;
    overflow: auto;
`
const ExampleItem = styled.span`
    padding: 8px 0;
    color:#333;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    &:hover{
        background-color: #f5f4f4;
    }
`

const exampleData = [
    { id: 'example1', lable: '测试一' },
    { id: 'example2', lable: '测试二' },
    { id: 'example3', lable: '测试三' },
    { id: 'example4', lable: '测试四' },
    { id: 'example5', lable: '测试五' },
    { id: 'example6', lable: '测试六' },
    { id: 'example7', lable: '测试' },
    { id: 'example8', lable: '测试' },
    { id: 'example9', lable: '测试' },
    { id: 'example10', lable: '测试' },
    { id: 'example11', lable: '测试' },
    { id: 'example12', lable: '测试' },
    { id: 'example13', lable: '测试' },
    { id: 'example14', lable: '测试' },
    { id: 'example15', lable: '测试' },
    { id: 'example16', lable: '测试' },
    { id: 'example17', lable: '测试' },
    { id: 'example18', lable: '测试' },
    { id: 'example19', lable: '测试' },
    { id: 'example20', lable: '测试' },
    { id: 'example21', lable: '测试' },
    { id: 'example22', lable: '测试' },
    { id: 'example23', lable: '测试' },
    { id: 'example24', lable: '测试' },
    { id: 'example25', lable: '测试' },
    { id: 'example26', lable: '测试' },
    { id: 'example27', lable: '测试' },
    { id: 'example28', lable: '测试' }
]

const ExampleList = () => {

    const exampleItemClick = (e) => {
        let label = e.target.innerText;
        console.log("example item click:", label);
        switch(label){
            case "":
                break;
        }

    }
    return (
        <>
            <ListBox>
                {
                    exampleData.map((data) => {
                        return <ExampleItem key={data.id} onClick={(e) => exampleItemClick(e)}>{data.lable}</ExampleItem>
                    })
                }
            </ListBox>
        </>
    )
}

export default ExampleList