import { GAME_WIN } from '../constants/ActionTypes'

const initialState = { 
	visible: false
}

const panel = (state = initialState, action) => {
  switch (action.type) {
    case GAME_WIN:
			return {
				visible: true
			}
		default:
      return state
  }
}

export default panel

export const getVisibility = (state = initialState) =>
  state.visible
/*

export const getCells = (state = initialState) => {
  return state.cells
}

export const getSquares = (state = initialState) =>{
  return state.squares
}

export const getFoundedSquares = (state = initialState) =>{
  return state.squares.filter( square => {
		return square.found === true
	})
}

export const getClickedSquare = (state = initialState) =>{
  return state.clickedSquare
}*/