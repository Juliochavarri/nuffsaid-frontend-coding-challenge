import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Api from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { addErrorMessageAction, addInfoMessageAction, addWarningMessageAction, clearAction, deleteErrorMessage, deleteInfoMessage, deleteWarningMessage } from '../redux/actions/actions'
import { Message } from './Message'
import { Grid } from '@material-ui/core'
import { TitleMessage } from './TitleMessage'

const MessageList = () => {
  
  
  const api = new Api({
    messageCallback: (message) => {
      messageCallback(message)
    },
  })
  
  const [messages, setMessages] = useState([])
  const [isApiStarted, setIsApiStarted] = useState(api.isStarted())

  const errorMessages = useSelector(state => state.addMessageReducer.errorMessages)
  const warningMessages = useSelector(state => state.addMessageReducer.warningMessages)
  const infoMessages = useSelector(state => state.addMessageReducer.infoMessages)
  const dispatch = useDispatch()

  useEffect(() => {
    api.start()
  }, [])

  const messageCallback = message => {
    message.id=Date.now()
    setMessages([...messages.slice(), message])
    message.priority === 1 ? dispatch(addErrorMessageAction(message) )
    : message.priority === 2 ? dispatch(addWarningMessageAction(message))
    : dispatch(addInfoMessageAction(message))
  }

  const renderButtons = () => {
    return (
      <div className='buttons-container'>
        <Button
          className='button-play'
          variant="contained"
          onClick={() => {
            setIsApiStarted(!isApiStarted)
            if (isApiStarted) {
              api.stop()
            } else {
              api.start()
            }
          }}
        >
          {isApiStarted ? 'Stop Messages' : 'Start Messages'}
        </Button>
        <Button
          className='button-clear'
          variant="contained"
          onClick={() => {
            dispatch(clearAction())
          }}
        >
          CLEAR
        </Button>
      </div>
    )
  }

    return (
      <div>

        {
          errorMessages.length !== 0 &&
          <Message
            type='error'
            content={errorMessages[errorMessages.length-1].message}
            clear={() => dispatch(deleteErrorMessage(errorMessages[errorMessages.length-1].id))}
          />
        }

        {renderButtons()}

        <Grid container style={{flexGrow: 1}}>
                <Grid item xs={12} sm={12}>
                    <Grid container justifyContent='center' spacing={10}>
                        <Grid item>
                          <TitleMessage title={'Error Type 1'} count={errorMessages.length} />
                          {errorMessages.map((error,index) => (
                            <Message 
                              key={index} 
                              content={error.message} 
                              type='error' 
                              clear={() => dispatch(deleteErrorMessage(error.id))}
                            />
                            ))}
                        </Grid>

                        <Grid item>
                          <TitleMessage title={'Warning Type 2'} count={warningMessages.length} />
                          {warningMessages.map((warning,index) => (
                            <Message 
                              key={index} 
                              content={warning.message} 
                              type='warning' 
                              clear={() => dispatch(deleteWarningMessage(warning.id))} />
                            ))}
                        </Grid>

                        <Grid item>
                          <TitleMessage title={'Info Type 3'} count={infoMessages.length} />
                          {infoMessages.map((info,index) => (
                            <Message 
                              key={index} 
                              content={info.message} 
                              type='info' 
                              clear={() => dispatch(deleteInfoMessage(info.id))} />
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
      </div>
    )
}

export default MessageList
