import React from 'react'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { ReactLogo } from '@styled-icons/fa-brands/ReactLogo'
import { Threedotjs } from '@styled-icons/simple-icons/Threedotjs'
import { Typescript } from '@styled-icons/simple-icons/Typescript'
import { Javascript } from '@styled-icons/fluentui-system-filled/Javascript'
import {Gitee} from '@styled-icons/simple-icons/Gitee'
import styled from 'styled-components'

const IconGroupBox = styled.div`
    margin-top: 20px;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const GithubIcon = styled(Github)`
  color: #3a3a3a;
  margin: 0 10px;
  padding: 10px;
  background-color:#ccc;
  border-radius: 50%;
`

const ReactLogoIcon = styled(ReactLogo)`
  color: #3a3a3a;
  margin: 0 10px;
  padding: 10px;
  background-color: #ccc;
  border-radius: 50%;
`

const ThreedotjsIcon = styled(Threedotjs)`
  color: #3a3a3a;
  margin: 0 10px;
  padding: 10px;
  background-color: #ccc;
  border-radius: 50%;
`

const TypescriptIcon = styled(Typescript)`
  color: #3a3a3a;
  margin: 0 10px;
  padding: 10px;
  background-color: #ccc;
  border-radius: 50%;
`
const GiteeIcon = styled(Gitee)`
  color: #3a3a3a;
  margin: 0 10px;
  padding: 10px;
  background-color: #ccc;
  border-radius: 50%;
`

const IconGroup:React.FC = () => {
    return (
        <>
            <IconGroupBox>
                <ReactLogoIcon title='React icon' size='50'></ReactLogoIcon>
                <ThreedotjsIcon title='Three.js icon' size='50'></ThreedotjsIcon>
                <TypescriptIcon title='Typescript icon' size='50'></TypescriptIcon>
                <GiteeIcon title='Javascript icon' size='50'></GiteeIcon>
                <GithubIcon title='Github icon' size='50'></GithubIcon>
            </IconGroupBox>
        </>
    )
}

export default IconGroup