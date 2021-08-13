import React from 'react'
import MessageList from './components/MessageList'
import {Header} from './components/Header'
import { Provider } from 'react-redux'
import { store } from './redux/store'

export const App = () => {
    return (
        <Provider store={store}>
            <Header title='Nuffsaid Frontend Coding Challenge' />
            <MessageList />
        </Provider>
    )
}