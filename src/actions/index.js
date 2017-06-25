import * as types from '../constants/ActionTypes'
import storage from '../api/storage'

const gamesList = allGames => ({
  type: types.GAMES_LIST,
  allGames
})

export const getGames = () => dispatch => {
  storage.getGamesList(games => { dispatch(gamesList(games)) })
}

export const selectGame = selectedGame => (dispatch, getState) => {
  if (getState().game.games.byName[selectedGame]) {
    dispatch({
			type: types.SELECT_GAME,
			selectedGame
		})
  }
}

export const selectGameMode = selectedGameMode => dispatch => {
	dispatch({
			type: types.SELECT_GAME_MODE,
			selectedGameMode
	})
}

export const selectGameDifficult = selectedGameDifficult => dispatch => {
	dispatch({
			type: types.SELECT_GAME_DIFFICULT,
			selectedGameDifficult
	})
}
 

export const gameInit = ( selectedGame , selectedGameMode , selectedGameDifficult ) => (dispatch, getState) => {
	
	let cells = (selectedGameDifficult === "easy") ? 3 : (selectedGameDifficult === "medium") ? 4 : 5;
	let rows = (selectedGameDifficult === "easy") ? 4 : (selectedGameDifficult === "medium") ? 5 : 6; 
	let game = getState().game.games.byName[selectedGame]
	
	let squares = [];
	let sortedData = game.data.sort(function() { return 0.5 - Math.random() });
	
	for(let x = 0, y ; x<( rows * cells); x++) {
		y = ( 1+x> ( rows * cells)/2) ? 1+x - (rows * cells)/2 : 1+x ;
		squares[x] = {
			key: x,
			value: y,
			visible: false,
			found: false,
			firstView: false,
			data: sortedData[y - 1]
		}
	}
	
	dispatch({
		type: types.GAME_INIT,
		board: { 
			cells:cells,
			rows:rows,
			squares: squares
		}	
	})
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
