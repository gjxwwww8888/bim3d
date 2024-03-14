import { IconButton, SvgIcon } from '@mui/material'
import React from 'react'
import Logo from '../../assets/svg/gitee.svg?react';

const GiteeIcon = () => {
    return (
        <IconButton aria-label="gitee" sx={{ margin: '0px 5px' }}>
            <SvgIcon component={Logo} viewBox='0 0 1024 1024' />
        </IconButton>
    )
}

export default GiteeIcon