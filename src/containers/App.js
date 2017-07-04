import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { gameInit , gameWin , gameExit , gameResume , resetTimer } from '../actions'
import { getSelectedGame , getSelectedGameMode , getSelectedGameDifficult , getGameStatus, getPanelStatus } from '../reducers/index'
import { getTimer } from '../reducers/timer'
import Games from './Games'
import Board from './Board'
import Topbar from './Topbar'
import Panel from './Panel'
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
			 panelContent.push(<span className="animated infinite pulse">Hai vinto!</span>);
			 panelContent.push(<div className={" "}>
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
					</div>);
		}
		else if(gameStatus === "pause") {
			 panelContent.push(<Button 
							key="renderCloseBtn" 
							className="button close fa fa-times-circle-o"
							onClick={() => gameResume()} 
							value="Close" 
						/>);
			 panelContent.push(<div className={" "}>
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
					</div>);
		}
			
		return(
			<div>
				<Games />
				<Topbar />
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
	gameResume: PropTypes.func,
	resetTimer: PropTypes.func,
	gameStatus: PropTypes.string,
	panelStatus: PropTypes.string,
	timer: PropTypes.number
}

const mapStateToProps = state => ({
	selectedGame: getSelectedGame(state),
	selectedGameMode: getSelectedGameMode(state),
	selectedGameDifficult: getSelectedGameDifficult(state),
	gameStatus: getGameStatus(state),
	panelStatus: getPanelStatus(state),
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

