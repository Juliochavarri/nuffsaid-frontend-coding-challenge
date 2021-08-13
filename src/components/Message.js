import React from 'react'
import { Button, Card, CardActions, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    bgError: {
        backgroundColor: '#F56236'
    },
    bgWarning: {
        backgroundColor: '#FCE788'
    },
    bgInfo: {
        backgroundColor: '#88FCA3'
    },
    cardAction: {
        position: 'absolute',
        right: 0,
        bottom: 0,
    }
  })

export const Message = ({content, type, clear}) => {

    const classes = useStyles()

    return (
            <Card 
                style={{
                    height: 120, 
                    width: 300, 
                    marginBottom: 16,
                    marginLeft: 16,
                    marginRight: 16,
                    position: 'relative'
                }}
                className={
                    type==='error' ? `${classes.bgError} card-actions` 
                    : type === 'warning' ? classes.bgWarning
                    : classes.bgInfo
                }
            >
                <CardContent>
                    {content}
                </CardContent>
                <CardActions className={classes.cardAction}>
                    <Button>
                        <Button 
                            color='primary'
                            onClick={clear}
                        >
                            Clear
                        </Button>
                    </Button>
                </CardActions>
            </Card>
    )
}