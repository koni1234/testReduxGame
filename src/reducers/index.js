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
import {gamesReducers as games, selectedGame} from './games'


export default combineReducers({
  games,
	selectedGame
})
//
//const todoApp = combineReducers({
//  todos,
//  visibilityFilter
//})
//
//export default todoApp