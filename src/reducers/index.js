import { combineReducers } from 'redux'

import sessionsReducer from './sessionsReducer'
import usersReducer from './usersReducer'
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  sessions: sessionsReducer,
  users: usersReducer
})

export default rootReducer
