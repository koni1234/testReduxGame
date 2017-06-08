import { combineReducers } from 'redux'
import user from './user'
import memory from './memory'

const memoryApp = combineReducers({
  user,
  memory
})

export default memoryApp