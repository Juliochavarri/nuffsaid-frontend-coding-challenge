import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 16,
        marginBottom: 12,
        padding: 2
    }
})

 export const TitleMessage = ({title, count}) => {

    const classes = useStyles()

     return (
        <div className={classes.titleContainer}>
            <Typography variant='h5'>
                {title}
            </Typography>
            <Typography variant='body1'>
                {`count ${count}`}
            </Typography>
        </div>
     )
 }