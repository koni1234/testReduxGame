import { START_TIMER, STOP_TIMER, RESET_TIMER , INCREMENT_TIMER , DECREMENT_TIMER } from '../constants/ActionTypes'

const initialState = { 
	pause: false,
	mode: "timer",
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
        ...state,
        startTime: (action.startTime) ? action.startTime : 0,
        startedAt: action.now,
				stoppedAt: -1,
				timer: action.timer,
				time: (action.startTime) ? action.startTime : state.time,
      }
		case INCREMENT_TIMER:
			return {
        ...state,
        time: state.time + 1
      }
		case DECREMENT_TIMER:
			return {
        ...state,
        time: state.time - 1
      }
		case RESET_TIMER:
			return {
        ...state,
        time: 0
      }
		default:
      return state
  }
}

export default timer

export const getTimer = (state = initialState) => state.timer

export const getTime = (state = initialState) => state.time