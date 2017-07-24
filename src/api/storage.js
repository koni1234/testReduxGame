import _games from './games.json'

export default {
  getUserData: (cb) => cb( JSON.parse(localStorage.getItem('userData') || '{}')),
  setUserData: (userName) => {
		localStorage.setItem('userData', JSON.stringify({userName: userName})); 
	},
  deleteUserData: () => ( localStorage.removeItem('userData') ),
	getGamesList: (cb) => cb(_games)
}
	