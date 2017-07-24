
import {
  CHECK_SESSION, LOGIN , CHECK_LOGIN_FORM
} from '../constants/ActionTypes'

const initialState = {
  userName: "",
  tempName: ""
}

const users = (state = initialState, action) => {
	switch (action.type) {
		case CHECK_SESSION:
			return Object.assign({}, state, {
				userName: (action.userName) ? action.userName : "",
				tempName: ""
			})
			case CHECK_LOGIN_FORM:
			return Object.assign({}, state, {
				tempName:  (action.tempName) ? action.tempName : "",
			})
//		case 'RENDER_LOGIN_FORM':
//			if(state.userName !== undefined && state.userName.length >= 3) {
//				return state
//			}
			case LOGIN:
			if(action.userName === undefined || action.userName.length < 3) {
				return state
			}
			return Object.assign({}, state, {
				userName: action.userName,
				tempName: ""
			})
//		case 'LOGOUT':
//			return Object.assign({}, state, {
//				userName: "",
//				tempName: ""
//			})
			
		default:
			return state
	}
}

export const getUserData = state => state
export const getUserName = state => state.userName
export const getTempName = state => state.tempName

export default users