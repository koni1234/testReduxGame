const user = (state = {}, action) => {
	switch (action.type) {
		case 'CHECK_SESSION':
			return {
				userName: action.userName,
				tempName: ""
			}
		case 'CHECK_LOGIN_FORM':
			return {
				tempName: action.tempName
			}
//		case 'RENDER_LOGIN_FORM':
//			if(state.userName !== undefined && state.userName.length >= 3) {
//				return state
//			}
		case 'LOGIN':
			if(action.userName === undefined || action.userName.length < 3) {
				return state
			}
			return Object.assign({}, state, {
				userName: action.userName,
				tempName: ""
			})
		case 'LOGOUT':
			return Object.assign({}, state, {
				userName: "",
				tempName: ""
			})
			
		default:
			return state
	}
}

export default user