import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { gameInit , gameWin , gameExit } from '../actions'
import { getSelectedGame , getSelectedGameMode , getSelectedGameDifficult , getGameStatus, getPanelStatus } from '../reducers/index'
import Games from './Games'
import Board from './Board'
import Panel from './Panel'
import Button from '../components/Button' 

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
		const { gameStatus , gameInit, gameExit, selectedGame, selectedGameMode , selectedGameDifficult } = this.props;
		const panelContent = [];
		
		if(gameStatus === "win") {
			 panelContent.push(
				 <div>
				 <span>Hai vinto!</span>
				 <div className={" "}>
						<Button 
							key="renderPlayAgainBtn" 
							className="button fa fa-play"
							onClick={() => gameInit(selectedGame, selectedGameMode ,selectedGameDifficult )} 
							value="Play again" 
						/>
						<Button 
							key="renderHomeBtn" 
							className="button fa fa-home"
							onClick={() => gameExit()} 
						value="Home" 
						/>
					</div>
			    </div>);
		}
			
		return(
			<div>
				<Games />
				<Board />
				<Panel>
					{panelContent}
				</Panel>
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
	gameExit: PropTypes.func,
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
	gameWin,
	gameExit
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

