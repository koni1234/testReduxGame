import { combineReducers } from 'redux'
import * as ACTIONS from '../constants/ActionTypes'
import games, * as fromGames from './games'
import board from './board'
import topbar, * as fromTopbar from './topbar'
import timer from './timer'

const initialState = {
	selectedGame: "",
	selectedGameMode: "",
	selectedGameDifficult: "",
	gameStatus: "",
	score: -1,
	games: {},
	timer: {}
}

const selectedGame = (state = initialState.selectedGame, action) => {
  switch (action.type) {
    case ACTIONS.GAME_EXIT: 
			return initialState.selectedGame
    case ACTIONS.SELECT_GAME: 
			return action.selectedGame
    default:
      return state
  }
}

const selectedGameMode = (state = initialState.selectedGameMode, action) => {
  switch (action.type) {
		case ACTIONS.SELECT_GAME_MODE: 
			return action.selectedGameMode
    case ACTIONS.GAME_EXIT: 
    case ACTIONS.SELECT_GAME: 
			return initialState.selectedGameMode
    default:
      return state
  }
}

const selectedGameDifficult = (state = initialState.selectedGameDifficult, action) => {
  switch (action.type) {
		case ACTIONS.SELECT_GAME_DIFFICULT: 
			return action.selectedGameDifficult
    case ACTIONS.GAME_EXIT: 
    case ACTIONS.SELECT_GAME: 
			return initialState.selectedGameDifficult
    default:
      return state
  }
}

const gameStatus = (state = initialState.gameStatus, action) => {
  switch (action.type) {
    case ACTIONS.GAME_EXIT: 
			return initialState.gameStatus
    case ACTIONS.GAME_INIT: 
    case ACTIONS.GAME_RESUME: 
			return "play"
    case ACTIONS.GAME_PAUSE: 
			return "pause"
    case ACTIONS.ALL_SQUARES_FOUNDED: 
			return "win"
		case ACTIONS.TIME_UP:
			return "lose"
    case ACTIONS.RESET_BOARD: 
			return initialState.gameStatus
    default:
      return state
  }
}

const score = (state = initialState.score, action) => {
	switch(action.type) {
    case ACTIONS.GAME_EXIT: 
			return initialState.score
    case ACTIONS.GAME_INIT: 
			return 0
    case ACTIONS.SQUARES_FOUNDED: 
			return state + 20
		default:
			return state
	}
}

export default combineReducers({
	board,
	games,
	topbar,
	timer,
	selectedGame,
	selectedGameMode,
	selectedGameDifficult,
	gameStatus,
	score
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

export const getScore = (state = initialState) =>
  state.score

export const getGamesList = (state = initialState) => getAllGames(state)

export const getTopbarStatus = () => {
  if(fromTopbar.getVisibility()) return "visible" 
	return "hidden"
}