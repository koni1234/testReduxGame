//import { combineReducers } from 'redux'
//import user from './user'
//import memory from './memory'
//
//const memoryApp = combineReducers({
//  user,
//  memory
//})
//
//export default memoryApp

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import games from './games'


export default combineReducers({
  todos,
	visibilityFilter,
  games
})
//
//const todoApp = combineReducers({
//  todos,
//  visibilityFilter
//})
//
//export default todoApp