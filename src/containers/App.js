import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { gameInit , gameWin , gameExit , gameResume , resetTimer } from '../actions'
import { getSelectedGame , getSelectedGameMode , getSelectedGameDifficult , getGameStatus } from '../reducers/index'
import { getTimer } from '../reducers/timer'
import Games from './Games'
import Board from './Board'
import Topbar from './Topbar'
import Panel from '../components/Panel'
import Button from '../components/Button' 

class App extends Component {
 
  componentWillReceiveProps(nextProps) {
		const { gameWin, gameInit , selectedGame, selectedGameMode , selectedGameDifficult , gameStatus , panelStatus } = nextProps;
		
		if(selectedGame && selectedGameMode && selectedGameDifficult && gameStatus === "" ) {
			gameInit(selectedGame, selectedGameMode ,selectedGameDifficult )
		}
		if(gameStatus === "win" && panelStatus !== "visible") {
			gameWin()
		}
  }
	
	render() { 
		const { timer , resetTimer , gameResume , gameStatus , gameInit, gameExit, selectedGame, selectedGameMode , selectedGameDifficult } = this.props;
		const panelContent = [];
		
		if(gameStatus === "win") {
			 panelContent.push(<Panel>
					<span className="animated infinite pulse">Hai vinto!</span>
					<div className={" "}>
						<Button 
							key="renderPlayAgainBtn" 
							className="button fa fa-play"
							onClick={() => {
				 				resetTimer(timer)
				 				gameInit(selectedGame, selectedGameMode ,selectedGameDifficult )
			 				}} 
							value="Play again" 
						/>
						<Button 
							key="renderHomeBtn" 
							className="button fa fa-home"
							onClick={() => gameExit()} 
						value="Home" 
						/>
					</div>
			</Panel>);
		}
		else if(gameStatus === "pause") {
			 panelContent.push(<Panel>
					<Button 
							key="renderCloseBtn" 
							className="button close fa fa-times-circle-o"
							onClick={() => gameResume()} 
							value="Close" 
						/>
						<div className={" "}>
						<Button 
							key="renderResumeBtn" 
							className="button fa fa-play"
							onClick={() => gameResume()} 
							value="Play" 
						/>
						<Button 
							key="renderRestartBtn" 
							className="button fa fa-repeat"
							onClick={() => {
									resetTimer(timer)
									gameInit(selectedGame, selectedGameMode ,selectedGameDifficult )	 
							}} 
							value="Restart" 
						/>
						<Button 
							key="renderHomeBtn" 
							className="button fa fa-home"
							onClick={() => gameExit()} 
						value="Home" 
						/>
					</div>
				</Panel>);
		}
			
		return(
			<div>
				<Games />
				<Topbar />
				<Board />
				{panelContent}
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
	gameResume: PropTypes.func,
	resetTimer: PropTypes.func,
	gameStatus: PropTypes.string,
	timer: PropTypes.number
}

const mapStateToProps = state => ({
	selectedGame: getSelectedGame(state),
	selectedGameMode: getSelectedGameMode(state),
	selectedGameDifficult: getSelectedGameDifficult(state),
	gameStatus: getGameStatus(state),
	timer: getTimer(state.timer)
})

const mapDispatchToProps = {
	gameInit,
	gameWin,
	gameExit,
	gameResume,
	resetTimer
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

