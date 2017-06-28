import { GAME_INIT , CLICK_SQUARE } from '../constants/ActionTypes'

const initialState = { 
		rows:0,
		cells:0,
		clickedSquare:-1,
		squares:[] 
}

const board = (state = initialState, action) => {
  switch (action.type) {
    case GAME_INIT:
      return action.board
		case CLICK_SQUARE:
			const squares = state.squares.slice();
			if(state.clickedSquare >= 0 && squares[state.clickedSquare].value === squares[action.clickedSquare].value) {
				squares[state.clickedSquare].found = true;
				squares[action.clickedSquare].found = true;
				squares[state.clickedSquare].visible = false;
				squares[action.clickedSquare].visible = false;
				action.clickedSquare = -1;
			}
			else if(state.clickedSquare >= 0) {
				squares[state.clickedSquare].visible = false;
				squares[action.clickedSquare].visible = false;
				action.clickedSquare = -1;
			}
			else {
				squares[action.clickedSquare].visible = true;
			}
			return Object.assign({}, state, {
        clickedSquare: action.clickedSquare,
				squares: squares
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