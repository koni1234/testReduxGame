import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { gameInit , gameLose, gameWin , gameExit , gameResume , resetTimer } from '../actions'
import { getSelectedGame , getSelectedGameMode , getSelectedGameDifficult , getGameStatus , getScore } from '../reducers/index'
import { getTimer, getTime } from '../reducers/timer'
import Games from './Games'
import Board from './Board'
import Topbar from './Topbar'
import Panel from '../components/Panel'
import Counter from '../components/Counter'
import Button from '../components/Button' 

class App extends Component {
 
  componentWillReceiveProps(nextProps) {
		const { gameLose , gameWin, gameInit , selectedGame, selectedGameMode , selectedGameDifficult } = nextProps;
		const nextGameStatus = nextProps.gameStatus
		const { gameStatus } = this.props;
		
		if(selectedGame && selectedGameMode && selectedGameDifficult && gameStatus === "" ) {
			gameInit(selectedGame, selectedGameMode ,selectedGameDifficult )
		}
		if(nextGameStatus === "win" && gameStatus !== nextGameStatus) {
			gameWin()
		}
		if(nextGameStatus === "lose" && gameStatus !== nextGameStatus) {
			gameLose()
		}
  }
	
	render() { 
		const { time , score , timer , resetTimer , gameResume , gameStatus , gameInit, gameExit, selectedGame, selectedGameMode , selectedGameDifficult } = this.props;
		const panelContent = [];
		
		if(gameStatus === "win" || gameStatus === "lose") {
			 panelContent.push(<Panel>
					<span className="animated infinite pulse">{(gameStatus === "win") ? "Hai vinto!" : "Hai perso"}</span>
			 		<Counter
						from={time} 
						units="seconds"
						to={0} 
						id="counter_inverse"
						inverse={true}
						className="animated fadeOut"
						duration={2500}
						refreshInterval={10}
					/>
					<Counter
						from={0} 
						className="animated zoomScaleIn"
						to={score} 
						units="points"
						duration={2500}
						refreshInterval={10}
					/>
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
	score: PropTypes.number,
	gameInit: PropTypes.func,
	gameWin: PropTypes.func,
	gameLose: PropTypes.func,
	gameExit: PropTypes.func,
	gameResume: PropTypes.func,
	resetTimer: PropTypes.func,
	gameStatus: PropTypes.string,
	timer: PropTypes.number,
	time: PropTypes.number
}

const mapStateToProps = state => ({
	selectedGame: getSelectedGame(state),
	selectedGameMode: getSelectedGameMode(state),
	selectedGameDifficult: getSelectedGameDifficult(state),
	score: getScore(state),
	gameStatus: getGameStatus(state),
	timer: getTimer(state.timer),
	time: getTime(state.timer)
})

const mapDispatchToProps = {
	gameInit,
	gameWin,
	gameLose,
	gameExit,
	gameResume,
	resetTimer
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

