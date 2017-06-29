import { combineReducers } from 'redux'
import { GAME_INIT, GAME_WIN, SELECT_GAME , SELECT_GAME_MODE , SELECT_GAME_DIFFICULT } from '../constants/ActionTypes'
import games, * as fromGames from './games'
import board from './board'

const initialState = {
	selectedGame: "",
	selectedGameMode: "",
	selectedGameDifficult: "",
	gameStatus: "",
	games: {}
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
    case GAME_WIN: 
			return "win"
    default:
      return state
  }
}

export default combineReducers({
	board,
	games,
	selectedGame,
	selectedGameMode,
	selectedGameDifficult	,
	gameStatus
})


const getAllGames = state => {
	return fromGames.getAllGames(state)
}

export const getSelectedGame = (state = initialState) =>
  state.selectedGame

export const getSelectedGameMode = (state = initialState) =>
  state.selectedGameMode

export const getSelectedGameDifficult = (state = initialState) =>
  state.selectedGameDifficult

export const getGameStatus = (state = initialState) =>
  state.gameStatus

export const getGamesList = (state = initialState) => getAllGames(state)
