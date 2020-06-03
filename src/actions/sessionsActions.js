export const GET_SESSIONS = 'GET SESSIONS'
export const GET_SESSIONS_SUCCESS = 'GET_SESSIONS_SUCCESS'
export const GET_SESSIONS_FAILURE = 'GET_SESSIONS_FAILURE'

export const getSessions = () => ({
    type: GET_SESSIONS,
})

export const getSessionsSuccess = sessions => ({
    type: GET_SESSIONS_SUCCESS,
    payload: sessions,
})

export const getSessionsFailure = () => ({
    type: GET_SESSIONS_FAILURE,
})

export function fetchSessions() {
    return async dispatch => {
        dispatch(getSessions())
        
        try {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            
            const response = await  fetch(`http://localhost:3000/sessions`, options)
            const data = await response.json()
            
            dispatch(getSessionsSuccess(data))
        } catch (error) {
            dispatch(getSessionsFailure())
        }
    }
}