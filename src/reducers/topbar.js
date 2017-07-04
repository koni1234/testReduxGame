import { combineReducers } from 'redux'
import { GAME_EXIT , GAME_INIT } from '../constants/ActionTypes'

const initialState = { 
	visible: false
}

const visible = (state = initialState.visible, action) => {
  switch (action.type) {
    case GAME_INIT:
			return true
		case GAME_EXIT:
			return false
		default:
      return state
  }
}

//export default topbar
export default combineReducers({
	visible
})

export const getVisibility = (state = initialState) =>
  state.visible