import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import { selectGame , selectGameMode , selectGameDifficult } from '../actions'
//import { getGames , getSelectedGame , getSelectedGameMode , getSelectedGameDifficult } from '../reducers/games'
import Square from '../components/Square' 
//import Button from '../components/Button' 
//import GamesList from '../components/GamesList'


const GamesListContainer = ({ games , selectedGame , selectedGameMode , selectedGameDifficult , selectGame , selectGameMode, selectGameDifficult}) => {
	
	return (
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
			
			return (<Game
					key={game.name}
					name={game.name}
					thumb={game.thumb}
					selected={(selectedGame === game.name) ? true : false}
				 >{btns}</Game>)
		}
				)}
		</GamesList>
	)
}

GamesListContainer.propTypes = {
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
	selectedGameDifficult: PropTypes.string
}

const mapStateToProps = state => ({
  games: getGames(state.games),
	selectedGame: getSelectedGame(state.games),
	selectedGameMode: getSelectedGameMode(state.games),
	selectedGameDifficult: getSelectedGameDifficult(state.games)
})

const mapDispatchToProps = {
	selectGame,
	selectGameMode,
	selectGameDifficult
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamesListContainer)