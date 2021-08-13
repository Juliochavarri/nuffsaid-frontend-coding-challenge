import React from 'react'
import { render } from '@testing-library/react'
import MessageList from '../components/MessageList'

describe('message-list', ()=> {
    const { container } = render (<MessageList />)
    expected(container).not.toBeVisible()
})