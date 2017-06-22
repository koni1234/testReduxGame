import { combineReducers } from 'redux'
import { GAME_INIT , SELECT_GAME , SELECT_GAME_MODE , SELECT_GAME_DIFFICULT } from '../constants/ActionTypes'

const initialState = {
	selectedGame: "",
	selectedGameMode: "",
	selectedGameDifficult: ""
}

const board = (state = {}, action) => {
  switch (action.type) {
		case SELECT_GAME:
		case SELECT_GAME_MODE:
		case SELECT_GAME_DIFFICULT:
    case GAME_INIT:
      return action
    default:
      return state
  }
}


export default combineReducers({
  board
})