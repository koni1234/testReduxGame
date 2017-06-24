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
import game from './game'


export default combineReducers({
  game
})
//
//const todoApp = combineReducers({
//  todos,
//  visibilityFilter
//})
//
//export default todoApp