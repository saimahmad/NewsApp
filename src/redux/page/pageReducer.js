import {GO_TO_HOME, GO_TO_DETAILS} from './pageTypes'

const initialState ={
    home: true,
    details: {},
    sourceId: {sourceId: "abc-news"}

}

const pageReducer = (state = initialState, action) => {
    
    // console.log("hi1"+action.payLoad)

    switch(action.type) {
        case GO_TO_HOME: return {
            ...state,
            home: true,
            sourceId: action.payload
        }

        case GO_TO_DETAILS: return {
            ...state,
            home: false,
            details: action.payload
        }

        default: return state
    }
    
}

export default pageReducer