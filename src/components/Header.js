import { Typography } from '@material-ui/core'
import React from 'react'

export const Header = ({title}) => {
    return (
        <header className='header'>
            <Typography variant='h4'>
                {title}
            </Typography>
        </header>
    )
}