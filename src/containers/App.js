import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { gameInit , gameWin } from '../actions'
import { getSelectedGame , getSelectedGameMode , getSelectedGameDifficult , getGameStatus, getPanelStatus } from '../reducers/index'
import Games from './Games'
import Board from './Board'
import Panel from './Panel'

class App extends Component {
 
  componentWillReceiveProps(nextProps) {
		const { gameWin, gameInit, selectedGame, selectedGameMode , selectedGameDifficult , gameStatus , panelStatus } = nextProps;
		
		if(selectedGame && selectedGameMode && selectedGameDifficult && gameStatus === "" ) {
			gameInit(selectedGame, selectedGameMode ,selectedGameDifficult )
		}
		if(gameStatus === "win" && panelStatus !== "visible") {
			gameWin()
		}
  }
	
	render() { 
			
		return(
			<div>
				<Games />
				<Board />
				<Panel />
			</div>
		)
	}
}

Games.propTypes = {
	selectedGame: PropTypes.string,
	selectedGameMode: PropTypes.string,
	selectedGameDifficult: PropTypes.string,
	gameInit: PropTypes.func,
	gameWin: PropTypes.func,
	gameStatus: PropTypes.string,
	panelStatus: PropTypes.string
}

const mapStateToProps = state => ({
	selectedGame: getSelectedGame(state),
	selectedGameMode: getSelectedGameMode(state),
	selectedGameDifficult: getSelectedGameDifficult(state),
	gameStatus: getGameStatus(state),
	panelStatus: getPanelStatus(state)
})

const mapDispatchToProps = {
	gameInit,
	gameWin
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

