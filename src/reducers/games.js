import { GAMES_LIST } from '../constants/ActionTypes'

const initialState = {
  allGames: [],
	byName: {}
}

const allGames = (state = initialState.allGames, action) => {
  switch (action.type) {
    case GAMES_LIST:
      return action.allGames
    default:
      return state
  }
}

const byName = (state = initialState.byName, action) => {
  switch (action.type) {
    case GAMES_LIST:
      return {
        ...state,
        ...action.allGames.reduce((obj, game) => {
          obj[game.name] = game
          return obj
        }, {})
      }
    default:
      return state
  }
}

const games = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        allGames: allGames(state.allGames, action),
        byName: byName(state.byName, action)
      }
  }
}

export const getAllGames = state => state.allGames

export default games