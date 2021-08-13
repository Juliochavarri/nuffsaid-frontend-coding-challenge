import { 
    ADD_ERROR_MESSAGE, 
    ADD_INFO_MESSAGE, 
    ADD_WARNING_MESSAGE, 
    CLEAR_ALL, 
    DELETE_ERROR_MESSAGE,
    DELETE_WARNING_MESSAGE,
    DELETE_INFO_MESSAGE
} from "../types/constants"

export const addErrorMessageAction = (message, id) => ({
    type: ADD_ERROR_MESSAGE,
    payload: message,
    id
})

export const addWarningMessageAction = (message, id) => ({
    type: ADD_WARNING_MESSAGE,
    payload: message,
    id
})

export const addInfoMessageAction = (message, id) => ({
    type: ADD_INFO_MESSAGE,
    payload: message,
    id
})

export const deleteErrorMessage = id => ({
    type: DELETE_ERROR_MESSAGE,
    id
})

export const deleteWarningMessage = id => ({
    type: DELETE_WARNING_MESSAGE,
    id
})

export const deleteInfoMessage = id => ({
    type: DELETE_INFO_MESSAGE,
    id
})

export const clearAction = () =>({
    type: CLEAR_ALL
})