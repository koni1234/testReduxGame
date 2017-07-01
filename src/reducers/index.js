import { combineReducers } from 'redux'
import { GAME_INIT, GAME_EXIT, ALL_SQUARES_FOUNDED, SELECT_GAME , SELECT_GAME_MODE , SELECT_GAME_DIFFICULT } from '../constants/ActionTypes'
import games, * as fromGames from './games'
import board from './board'
import panel, * as fromPanel from './panel'

const initialState = {
	selectedGame: "",
	selectedGameMode: "",
	selectedGameDifficult: "",
	gameStatus: "",
	panelStatus:"",
	games: {}
}

const selectedGame = (state = initialState.selectedGame, action) => {
  switch (action.type) {
    case GAME_EXIT: 
			return initialState.selectedGame
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
    case GAME_EXIT: 
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
    case GAME_EXIT: 
    case SELECT_GAME: 
			return initialState.selectedGameDifficult
    default:
      return state
  }
}

const gameStatus = (state = initialState.gameStatus, action) => {
  switch (action.type) {
    case GAME_EXIT: 
			return initialState.gameStatus
    case GAME_INIT: 
			return "play"
    case ALL_SQUARES_FOUNDED: 
			return "win"
    default:
      return state
  }
}

export default combineReducers({
	board,
	games,
	panel,
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

export const getPanelStatus = () => {
  if(fromPanel.getVisibility()) return "visible" 
	return "hidden"
}