import { GAME_INIT } from '../constants/ActionTypes'

const initialState = { 
		rows:0,
		cells:0,
		squares:[] 
}

const board = (state = initialState, action) => {
  switch (action.type) {
    case GAME_INIT:
      return action.board
    default:
      return state
  }
}

export default board

export const getRows = (state = initialState) =>
  state.rows

export const getCells = (state = initialState) => {
  return state.cells
}

export const getSquares = (state = initialState) =>{
  return state.squares
}