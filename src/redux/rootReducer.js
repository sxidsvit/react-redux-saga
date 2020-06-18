import { combineReducers } from 'redux'
import { postsReduсer } from './postsReduсer'
import { appReducer } from './appReducer'

export const rootReducer = combineReducers({
  posts: postsReduсer,
  app: appReducer
})