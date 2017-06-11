import { combineReducers } from 'redux'
import { GAMES_LIST } from '../constants/ActionTypes'

const games = (state = {}, action) => {
  switch (action.type) {
    case GAMES_LIST:
      return action.games
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

export default combineReducers({
  byName,
	games
})

export const getGame = (state, name) =>
  state.byName[name]

export const getGames = state =>
  state.games