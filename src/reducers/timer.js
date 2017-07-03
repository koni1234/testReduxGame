import { START_TIMER, STOP_TIMER, RESET_TIMER , INCREMENT_TIMER } from '../constants/ActionTypes'

const initialState = { 
	startTime: -1,
  startedAt: -1,
  stoppedAt: -1,
	time: 0,
	timer: 0
}

const timer = (state = initialState, action) => {
  switch (action.type) {
    case STOP_TIMER:
      return {
        ...state,
        stoppedAt: action.now,
				timer: initialState.timer
      }
		case START_TIMER:
			return {
        ...initialState,
        startTime: action.startTime,
        startedAt: action.now,
				timer: action.timer
      }
		case INCREMENT_TIMER:
			return {
        ...state,
        time: state.time + 1
      }
		case RESET_TIMER:
			return {
        initialState
      }
		default:
      return state
  }
}

export default timer

export const getTimer = (state = initialState) => state.timer

export const getTime = (state = initialState) => state.time