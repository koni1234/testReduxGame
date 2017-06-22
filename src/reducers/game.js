import { combineReducers } from 'redux'
import games, * as fromGames from './games'
import board from './board'
import { GAME_INIT, SELECT_GAME , SELECT_GAME_MODE , SELECT_GAME_DIFFICULT } from '../constants/ActionTypes'

const initialState = {
	selectedGame: "",
	selectedGameMode: "",
	selectedGameDifficult: "",
	gameStatus: ""
}


const selectedGame = (state = initialState.selectedGame, action) => {
  switch (action.type) {
    case SELECT_GAME: 
			return action.selectedGame
    default:
      return state
  }
}

const selectedGameMode = (state = initialState.selectedGameMode, action) => {
  switch (action.type) {
		case SELECT_GAME_MODE: 
			return action.selectedGameMode
    case SELECT_GAME: 
			return initialState.selectedGameMode
    default:
      return state
  }
}

const selectedGameDifficult = (state = initialState.selectedGameDifficult, action) => {
  switch (action.type) {
		case SELECT_GAME_DIFFICULT: 
			return action.selectedGameDifficult
    case SELECT_GAME: 
			return initialState.selectedGameDifficult
    default:
      return state
  }
}

const gameStatus = (state = initialState.gameStatus, action) => {
  switch (action.type) {
    case GAME_INIT: 
			return "play"
    default:
      return state
  }
}

export default combineReducers({
	games,
	board,
	selectedGame,
	selectedGameMode,
	selectedGameDifficult	,
	gameStatus
})

const getAllGames = state => {
	return fromGames.getAllGames(state.games)
}

export const getSelectedGame = (state = initialState) =>
  state.selectedGame

export const getSelectedGameMode = (state = initialState) =>
  state.selectedGameMode

export const getSelectedGameDifficult = (state = initialState) =>
  state.selectedGameDifficult

export const getGameStatus = (state = initialState) =>
  state.gameStatus

export const getGamesList = state => getAllGames(state)

