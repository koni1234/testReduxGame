
import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { gameInit, selectGame , selectGameMode , selectGameDifficult } from '../actions'
import { getGamesList, getSelectedGame , getSelectedGameMode , getSelectedGameDifficult , getGameStatus } from '../reducers/game'
import GameItem from '../components/GameItem' 
import Button from '../components/Button' 
import GamesList from '../components/GamesList'
import Board from '../components/Board'


class Game extends Component {
 
  componentWillReceiveProps(nextProps) {
		const { gameInit, selectedGame, selectedGameMode , selectedGameDifficult , gameStatus } = nextProps;
		
		if(selectedGame && selectedGameMode && selectedGameDifficult && gameStatus === "" ) {
			gameInit(selectedGame, selectedGameMode ,selectedGameDifficult )
		}
  }
	
	renderBoard() {
		return (
			<Board />
		)
	}
	
	render() {
		const { games, selectGame , selectGameMode , selectGameDifficult , selectedGame, selectedGameMode , selectedGameDifficult , gameStatus } = this.props;
			
		if(gameStatus === "play") {
		//	return (
			//	this.renderBoard()
				//)
		}
		
		return(
			<GamesList title="Games">
			{games.map(game => {
				let btns = [];
				btns.push(<Button key="selectGame" disabled={(selectedGame === game.name) ? true : false} onClick={() => selectGame(game.name)} value="Select Game"/>);
				if(selectedGame === game.name) {
					btns.push(<Button key="getSelectedGameModeTime" disabled={(selectedGameMode && selectedGame === game.name) ? true : false} onClick={() => selectGameMode("time")} value="time" />);
					btns.push(<Button key="getSelectedGameModeFree" disabled={(selectedGameMode && selectedGame === game.name) ? true : false} onClick={() => selectGameMode("free")} value="free" />);
				}
				if(selectedGame === game.name && selectedGameMode) {
					btns.push(<Button key="getSelectedGameDifficultEasy" disabled={(selectedGameDifficult && selectedGame === game.name) ? true : false} onClick={() => selectGameDifficult("easy")} value="easy" />);
					btns.push(<Button key="getSelectedGameDifficultMedium" disabled={(selectedGameDifficult && selectedGame === game.name) ? true : false} onClick={() => selectGameDifficult("medium")} value="medium" />);
					btns.push(<Button key="getSelectedGameDifficultHard" disabled={(selectedGameDifficult && selectedGame === game.name) ? true : false} onClick={() => selectGameDifficult("hard")} value="hard" />);
				}

				return (<GameItem
						key={game.name}
						name={game.name}
						thumb={game.thumb}
						selected={(selectedGame === game.name) ? true : false}
					 >{btns}</GameItem>)
				}
			)}
			</GamesList>
		)
	}
}

Game.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumb: PropTypes.string,
  	children: PropTypes.node
  })).isRequired,
	selectedGame: PropTypes.string,
	selectGame: PropTypes.func,
	selectGameMode: PropTypes.func,
	selectGameDifficult: PropTypes.func,
	selectedGameMode: PropTypes.string,
	selectedGameDifficult: PropTypes.string,
	gameInit: PropTypes.func,
	gameStatus: PropTypes.string
}

const mapStateToProps = state => ({
		games: getGamesList(state.game),
		selectedGame: getSelectedGame(state.game),
		selectedGameMode: getSelectedGameMode(state.game),
		selectedGameDifficult: getSelectedGameDifficult(state.game),
		gameStatus: getGameStatus(state.game)
})

const mapDispatchToProps = {
	selectGame,
	selectGameMode,
	selectGameDifficult,
	gameInit
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)