import * as actions from '../actions/sessionsActions'

export const initialState = {
    sessions: [],
    loading: false
}

export default function sessionsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_SESSIONS:
            return { ...state, loading: true }
        case actions.GET_SESSIONS_SUCCESS:
            return { sessions: action.payload, loading: false }
        case actions.GET_SESSIONS_FAILURE:
            return { ...state, loading: false }
        
        default:
            return state
    }
}