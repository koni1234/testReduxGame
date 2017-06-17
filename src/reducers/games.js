import { combineReducers } from 'redux'
import { GAMES_LIST, SELECT_GAME , SELECT_GAME_MODE , SELECT_GAME_DIFFICULT } from '../constants/ActionTypes'

const initialState = {
  games: [],
	byName: {},
	selectedGame: "",
	selectedGameMode: "",
	selectedGameDifficult: ""
}

const games = (state = initialState.games, action) => {
  switch (action.type) {
    case GAMES_LIST:
      return action.games
    default:
      return state
  }
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

const byName = (state = initialState.byName, action) => {
  switch (action.type) {
    case GAMES_LIST:
      return {
        ...state,
        ...action.games.reduce((obj, game) => {
          obj[game.name] = game
          return obj
        }, {})
      }
    default:
      return state
  }
} 

export default combineReducers({
  byName,
	games,
	selectedGame,
	selectedGameMode,
	selectedGameDifficult
})

//export const getGame = (state, name) =>
//  state.byName[name]

export const getGames = state =>
  state.games

export const getSelectedGame = (state = initialState) =>
  state.selectedGame

export const getSelectedGameMode = (state = initialState) =>
  state.selectedGameMode

export const getSelectedGameDifficult = (state = initialState) =>
  state.selectedGameDifficult