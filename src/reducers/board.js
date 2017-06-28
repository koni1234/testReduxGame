import { GAME_INIT , CLICK_SQUARE } from '../constants/ActionTypes'

const initialState = { 
		rows:0,
		cells:0,
		visibleSquare:-1,
		clickedSquare:-1,
		squares:[] 
}

const board = (state = initialState, action) => {
  switch (action.type) {
    case GAME_INIT:
      return action.board
		case CLICK_SQUARE:
			return Object.assign({}, state, {
        clickedSquare: action.clickedSquare
      })
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

export const getClickedSquare = (state = initialState) =>{
  return state.clickedSquare
}
export const getVisibleSquare = (state = initialState) =>{
  return state.visibleSquare
}