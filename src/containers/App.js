import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { squaresShuffle, gameInit , gameLose, gameWin , gameExit , gameResume , restartTimer ,resetBoard } from '../actions'
import { getSelectedGame , getSelectedGameMode , getSelectedGameDifficult , getGameStatus , getScore } from '../reducers/index'
import { getStartTime , getTimer, getTime } from '../reducers/timer'
import Games from './Games'
import Board from './Board'
import Topbar from './Topbar'
import Panel from '../components/Panel'
import Counter from '../components/Counter'
import Button from '../components/Button' 

class App extends Component {
 
  componentWillReceiveProps(nextProps) {
		const { time , startTime , squaresShuffle, gameLose , gameWin, gameInit , selectedGame, selectedGameMode , selectedGameDifficult } = nextProps;
		const nextGameStatus = nextProps.gameStatus
		const { gameStatus } = this.props;
		
		if(selectedGame && selectedGameMode && selectedGameDifficult && gameStatus === "" && nextGameStatus !== "play") {
			gameInit(selectedGame, selectedGameMode ,selectedGameDifficult )
		}
		else if(nextGameStatus === "win" && gameStatus !== nextGameStatus) {
			gameWin()
		}
		else if(nextGameStatus === "lose" && gameStatus !== nextGameStatus) {
			gameLose()
		}
		else if(time && time!==startTime && gameStatus === "play") { 
			//shuffle
			let seconds = 15; //ogni 15 secondi provo a fare shuffle
			let tryShuffle = ( time % seconds === 0 )  ? true : false;
			if( tryShuffle && Math.random() >= 0.5) squaresShuffle()
		}
  }
	
	render() { 
		const { resetBoard, time , score , timer , restartTimer , gameResume , gameStatus , gameInit, gameExit, selectedGame, selectedGameMode , selectedGameDifficult } = this.props;
		const panel = [];
		const panelContent = [];
		
		if(gameStatus === "win") {
			panelContent.push(<span  key="renderMsg" className="animated infinite pulse">Hai vinto!</span>)
			if(selectedGameMode ==="time") {
				panelContent.push(<Counter
						key="renderCounterS"
						from={time} 
						units="seconds"
						to={0} 
						id="counter_inverse"
						inverse={true}
						className="animated fadeOut"
						duration={2500}
						refreshInterval={10}
					/>)
			}
			panelContent.push(
					<Counter
						from={0} 
						className="animated zoomScaleIn"
						to={score} 
						key="renderCounter"
						units="points"
						duration={2500}
						refreshInterval={10}
					/>)
			panelContent.push(
					<div key="renderBtns" className={" "}>
						<Button 
							key="renderPlayAgainBtn" 
							className="button fa fa-play"
							onClick={() => {
				 				restartTimer(timer)
								resetBoard()
				 			//	gameInit(selectedGame, selectedGameMode ,selectedGameDifficult )
			 				}} 
							value="Play again" 
						/>
						<Button 
							key="renderHomeBtn" 
							className="button fa fa-home"
							onClick={() => gameExit()} 
						value="Home" 
						/>
					</div>)
		}
		else if(gameStatus === "lose") {
			panelContent.push(<span key="renderMsg" className="animated infinite pulse">Hai perso!</span>)
			panelContent.push(
					<Counter
						from={0} 
						className="animated zoomScaleIn"
						to={score} 
						key="renderCounter"
						units="points"
						duration={2500}
						refreshInterval={10}
					/>)
			panelContent.push(
					<div key="renderBtns" className={" "}>
						<Button 
							key="renderPlayAgainBtn" 
							className="button fa fa-play"
							onClick={() => {
				 				restartTimer(timer)
								resetBoard()
				 			//	gameInit(selectedGame, selectedGameMode ,selectedGameDifficult )
			 				}} 
							value="Play again" 
						/>
						<Button 
							key="renderHomeBtn" 
							className="button fa fa-home"
							onClick={() => gameExit()} 
						value="Home" 
						/>
					</div>)
	}
		else if(gameStatus === "pause") {
			 panelContent.push(<Button 
							key="renderCloseBtn" 
							className="button close fa fa-times-circle-o"
							onClick={() => gameResume()} 
							value="Close" 
						/>)
			 panelContent.push(<div key="renderBtns" className={" "}>
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
									restartTimer(timer)
									resetBoard()
							//		gameInit(selectedGame, selectedGameMode ,selectedGameDifficult )	 
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
		
		if(gameStatus === "win" || gameStatus === "lose" || gameStatus === "pause") {
			panel.push(<Panel key="renderPanel">{panelContent}</Panel>)
		}
		
			
		return(
			<div>
				<Games key="renderGames" />
				<Topbar key="renderTopbar"  />
				<Board  key="renderBoard" />
				{panel}
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
	restartTimer: PropTypes.func,
	resetBoard: PropTypes.func,
	gameStatus: PropTypes.string,
	timer: PropTypes.number,
	startTime: PropTypes.number,
	time: PropTypes.number,
	squaresShuffle: PropTypes.func
}

const mapStateToProps = state => ({
	selectedGame: getSelectedGame(state),
	selectedGameMode: getSelectedGameMode(state),
	selectedGameDifficult: getSelectedGameDifficult(state),
	score: getScore(state),
	gameStatus: getGameStatus(state),
	timer: getTimer(state.timer),
	startTime: getStartTime(state.timer),
	time: getTime(state.timer)
})

const mapDispatchToProps = {
	gameInit,
	gameWin,
	gameLose,
	gameExit,
	gameResume,
	resetBoard,
	restartTimer,
	squaresShuffle
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

