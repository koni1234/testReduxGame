import { GAME_INIT , SELECT_GAME , SELECT_GAME_MODE , SELECT_GAME_DIFFICULT } from '../constants/ActionTypes'

const initialState = {
	game: "",
	cells: "",
	rows: ""
}

const board = (state = {}, action) => {
  switch (action.type) {
		case SELECT_GAME:
		case SELECT_GAME_MODE:
		case SELECT_GAME_DIFFICULT:
      return state
    case GAME_INIT:
      return action.board
    default:
      return state
  }
}

export default board