import React from 'react'
import styled from 'styled-components'
import ItemBox from './itembox/ItemBox'
import ListInfo from './ListInfo'

const List = styled.div`

    position: relative;
    /* min-height: 100vh; */
    background-color: #eee;
    z-index: 1;

`

const ListBox: React.FC  = () => {
  return (
    <>
        <List>
          <ListInfo></ListInfo>
          <ItemBox></ItemBox>
        </List>
    </>
  )
}

export default ListBox