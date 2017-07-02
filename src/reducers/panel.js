import { GAME_PAUSE , GAME_WIN , GAME_EXIT , GAME_INIT , GAME_RESUME } from '../constants/ActionTypes'

const initialState = { 
	visible: false
}

const panel = (state = initialState, action) => {
  switch (action.type) {
    case GAME_PAUSE:
    case GAME_WIN:
			return {
				visible: true
			}
		case GAME_INIT:
		case GAME_RESUME:
		case GAME_EXIT:
			return {
				visible: false
			}
		default:
      return state
  }
}

export default panel

export const getVisibility = (state = initialState) =>
  state.visible