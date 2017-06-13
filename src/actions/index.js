import * as types from '../constants/ActionTypes'
import storage from '../api/storage'

const gamesList = games => ({
  type: types.GAMES_LIST,
  games: games
})

export const getGames = () => dispatch => {
  storage.getGamesList(games => { dispatch(gamesList(games)) })
}

export const selectGame = selectedGame => (dispatch, getState) => {
  if (getState().games.byName[selectedGame]) {
		//const { games } = getState()
    dispatch({
			type: types.SELECT_GAME,
			selectedGame
		})
  }
}





let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

//import storage from '../api/storage'
//import * as types from '../constants/ActionTypes'

//
//
//export const CHECK_SUBMIT_LOGIN_FORM = 'CHECK_SUBMIT_LOGIN_FORM' 
//export const LOGOUT = 'LOGOUT'
//export const RENDER_GAMES_LIST = 'RENDER_GAMES_LIST'
// 
//
//const checkSession = userData => ({
//  type: types.CHECK_SESSION,
//  userData: userData
//})
//
//export const getUserData = () => dispatch => {
//  storage.getUserData(userData => {
//    dispatch(checkSession(userData))
//  })
//}
//
//const login = userName => ({
//  type: types.LOGIN,
//  userName: userName
//})
//
//export const setUserData = userName => dispatch => {
//	//if username length ....
//  storage.setUserData(userName => {
//    dispatch(login(userName))
//  })
//}

			 
	
//export const checkLoginForm = (tempName) => {
//	return {
//		type: 'CHECK_LOGIN_FORM',
//		tempName
//	}
//}
//export const renderLoginForm = () => {
//  	return {
//		type: 'RENDER_LOGIN_FORM'
//	}
//} 
//export const logout = (user) => {
//	localStorage.removeItem('userData');
//	return {
//    	type: 'LOGOUT',
//    	user
//  	}
//}
//export const renderGamesList = () => {
//  return {
//    type: 'RENDER_GAMES_LIST'
//  }
//}
