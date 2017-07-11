import { GAME_INIT, GAME_EXIT , CLICK_SQUARE , ALL_SQUARES_FOUNDED , SQUARES_SHUFFLE , SQUARES_SHUFFLE_END } from '../constants/ActionTypes'

const initialState = { 
		rows:0,
		cells:0,
		clickedSquare:-1,
		lastClickedSquare: -1,
		status: "",
		squares:[] 
}

const board = (state = initialState, action) => {
  switch (action.type) {
    case GAME_INIT:
			return {
				...initialState,
				...action.board
			}
    case GAME_EXIT:
			return {
				...state,
				...initialState
			}
		case ALL_SQUARES_FOUNDED:
			return Object.assign({}, state, {
        status: "allSquaresFounded"
      })
		case CLICK_SQUARE:
			const squares = state.squares.slice();
			const clickedSquare = action.clickedSquare;
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
        lastClickedSquare: clickedSquare,
				squares: squares
      })
		case SQUARES_SHUFFLE: 
			return Object.assign({}, state, {
        status: "onShuffle"
      })
		case SQUARES_SHUFFLE_END: 
			const squaresS = state.squares.slice();
			return Object.assign({}, state, {
				squares: squaresS.sort(function() { return 0.5 - Math.random() }),
				clickedSquare: -1,
				lastClickedSquare: -1,
        status: "shuffleEnd"
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

export const getLastClickedSquare = (state = initialState) =>{
  return state.lastClickedSquare
}