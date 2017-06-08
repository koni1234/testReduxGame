export const checkSession = () => {
	const userData =  JSON.parse(localStorage.getItem('userData') || '{}');
	return {
		type: 'CHECK_SESSION',
		userData
	}
}
export const checkLoginForm = (tempName) => {
	return {
		type: 'CHECK_LOGIN_FORM',
		tempName
	}
}
//export const renderLoginForm = () => {
//  	return {
//		type: 'RENDER_LOGIN_FORM'
//	}
//}
export const login = (userName) => {
	localStorage.setItem('userData', JSON.stringify({userName: userName}));
	return {
    	type: 'LOGIN',
		userName
	}
}
export const logout = (user) => {
	localStorage.removeItem('userData');
	return {
    	type: 'LOGOUT',
    	user
  	}
}
//export const renderGamesList = () => {
//  return {
//    type: 'RENDER_GAMES_LIST'
//  }
//}
