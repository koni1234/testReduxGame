import { combineReducers } from 'redux'
import { GAMES_LIST, SELECT_GAME } from '../constants/ActionTypes'

const games = (state = {}, action) => {
  switch (action.type) {
    case GAMES_LIST:
      return action.games
    default:
      return state
  }
}

export const selectedGame = (state = {}, action) => {
  switch (action.type) {
    case SELECT_GAME: 
			return {
				...state,
				selectedGame: action.selectedGame
			}
    default:
      return state
  }
}

const byName = (state = {}, action) => {
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
      const { gameName } = action
      if (gameName) {
        return {
          ...state,
          [gameName]: games(state[gameName], action)
        }
      }
      return state
  }
} 

export const gamesReducers = combineReducers({
  byName,
	games,
});

export const getGame = (state, name) =>
  state.byName[name]

export const getGames = state =>
  state.games

export const getSelectedGame = state =>
  (state) ? state.selectedGame : ""