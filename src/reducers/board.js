import { GAME_INIT , GAME_WIN , CLICK_SQUARE , ALL_SQUARES_FOUNDED } from '../constants/ActionTypes'

const initialState = { 
		rows:0,
		cells:0,
		clickedSquare:-1,
		status: "",
		squares:[] 
}

const board = (state = initialState, action) => {
  switch (action.type) {
    case GAME_INIT:
			return {
				...state,
				...action.board
			}
		case ALL_SQUARES_FOUNDED:
			return Object.assign({}, state, {
        status: "allSquaresFounded"
      })
		case GAME_WIN:
			return state
			/*return {
				...state,
				...initialState
			}*/
		case CLICK_SQUARE:
			const squares = state.squares.slice();
			if(squares[state.clickedSquare] && squares[state.clickedSquare].value === squares[action.clickedSquare].value) {
				squares[state.clickedSquare].found = true;
				squares[action.clickedSquare].found = true;
				squares[state.clickedSquare].visible = false;
				squares[action.clickedSquare].visible = false;
				action.clickedSquare = -1;
			}
			else if(squares[state.clickedSquare]) {
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

export const getStatus = (state = initialState) =>{
  return state.status
}

export const getFoundedSquares = (state = initialState) =>{
  return state.squares.filter( square => {
		return square.found === true
	})
}

export const getClickedSquare = (state = initialState) =>{
  return state.clickedSquare
}