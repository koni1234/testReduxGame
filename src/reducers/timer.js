import { START_TIMER, STOP_TIMER, RESET_TIMER , INCREMENT_TIMER , DECREMENT_TIMER , RESTART_TIMER } from '../constants/ActionTypes'

const initialState = { 
	pause: false,
	mode: "timer",
	startTime: 0,
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
        startTime: (action.startTime && action.startTime > -1) ? action.startTime : state.startTime,
        startedAt: action.now,
				stoppedAt: -1,
				timer: action.timer,
				time: (action.startTime && action.startTime > -1) ? action.startTime : state.time,
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
		case RESTART_TIMER:
			return {
        ...state,
				startedAt: -1,
				stoppedAt: -1,
        startTime: (state.startTime) ? state.startTime : 0,
        time: (state.startTime) ? state.startTime : 0,
      }
		case RESET_TIMER:
			return initialState
		default:
      return state
  }
}

export default timer

export const getTimer = (state = initialState) => state.timer

export const getTime = (state = initialState) => state.time