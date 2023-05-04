import React from 'react'
import styled from 'styled-components'
import { Building2 } from '@styled-icons/remix-line/Building2'
import { ImageEdit } from '@styled-icons/fluentui-system-regular/ImageEdit'
import { Molecule } from '@styled-icons/fluentui-system-regular/Molecule'
import { TextParagraph } from '@styled-icons/fluentui-system-regular/TextParagraph'
import { useDispatch } from 'react-redux'
import { changeItem } from '@/views/store/editor'

const SideBarBox = styled.div`
    width: 48px;
    height: 100%;
    background-color: rgba(224, 224, 224, 0.7);
    backdrop-filter: blur(2px);
    border-radius: 10px 0 0 10px ;
`
const LeftMenuItem = styled.button`
    margin: 10px 0 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    color: black;
    font-size: 14px;
    border: 0;
    background-color: rgba(225, 225, 225, 0.8);
    backdrop-filter: blur(2px);
    &:hover{
        background-color:#e4e4e4;
    }
    &:focus{
        background-color:rgba(220, 220, 220, 0.7);
    }
`

const Building2Icon = styled(Building2)`
    color: black;
    
`
const ImageEditIcon = styled(ImageEdit)`
    color: black;

`
const MoleculeIcon = styled(Molecule)`
    color: black;

`
const TextParagraphIcon = styled(TextParagraph)`
    color: black;

`

const leftMenu = [
    { id: 'sd1', label: "结构", icon: <Building2Icon size='20' /> },
    { id: 'sd2', label: "材质", icon: <ImageEditIcon size='20' /> },
    { id: 'sd3', label: "模型", icon: <MoleculeIcon size='20' /> },
    { id: 'sd4', label: "图纸", icon: <TextParagraphIcon size='20' /> }
];

const SideBar = () => {

    const dispatch = useDispatch();

    return (
        <>
            <SideBarBox>
                {
                    leftMenu.map((data) => {
                        return (
                            <LeftMenuItem key={data.id} onClick={() => { dispatch(changeItem(data.id)) }}>
                                {data.icon}
                                {data.label}
                            </LeftMenuItem>
                        )
                    })
                }
            </SideBarBox>
        </>
    )
}

export default SideBar