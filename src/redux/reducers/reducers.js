import { combineReducers } from "redux"
import { 
    ADD_ERROR_MESSAGE, 
    ADD_INFO_MESSAGE, 
    ADD_WARNING_MESSAGE, 
    CLEAR_ALL, 
    DELETE_ERROR_MESSAGE,
    DELETE_WARNING_MESSAGE,
    DELETE_INFO_MESSAGE
 } from "../types/constants"

const initialState  = {
    errorMessages: [],
    warningMessages: [],
    infoMessages: []
}

const addMessageReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ERROR_MESSAGE:
            return {
                ...state,
                errorMessages: [...state.errorMessages, action.payload]
            }
        
        case ADD_WARNING_MESSAGE:
            return {
                ...state,
                warningMessages: [...state.warningMessages, action.payload]
            }

        case ADD_INFO_MESSAGE:
            return {
                ...state,
                infoMessages: [...state.infoMessages, action.payload]
            }

        case DELETE_ERROR_MESSAGE:
            return {
                ...state,
                errorMessages: state.errorMessages.filter(errorMessage => errorMessage.id !== action.id)
            }

        case DELETE_WARNING_MESSAGE:
            return {
                ...state,
                warningMessages: state.warningMessages.filter(warningMessage => warningMessage.id !== action.id)
            }

        case DELETE_INFO_MESSAGE:
            return {
                ...state,
                infoMessages: state.infoMessages.filter(infoMessage => infoMessage.id !== action.id)
            }

        case CLEAR_ALL:
            return {
                ...state,
                errorMessages: [],
                warningMessages: [],
                infoMessages: []
            }

        default: return state
    }
}

export default combineReducers({
    addMessageReducer,
})