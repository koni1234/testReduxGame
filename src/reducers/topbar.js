import { GAME_EXIT , GAME_INIT } from '../constants/ActionTypes'

const initialState = { 
	visible: false
}

const topbar = (state = initialState, action) => {
  switch (action.type) {
    case GAME_INIT:
			return {
				visible: true
			}
		case GAME_EXIT:
			return {
				visible: false
			}
		default:
      return state
  }
}

export default topbar

export const getVisibility = (state = initialState) =>
  state.visible