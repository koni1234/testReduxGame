
import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectGame , selectGameMode , selectGameDifficult } from '../actions'
import { getGamesList, getSelectedGame , getSelectedGameMode , getSelectedGameDifficult} from '../reducers/index'
import GameItem from '../components/GameItem' 
import Button from '../components/Button' 
import GamesList from '../components/GamesList' 


class Games extends Component {
	
	render() {
		const { games, selectGame , selectGameMode , selectGameDifficult , selectedGame, selectedGameMode , selectedGameDifficult } = this.props;
			
		return(
			<GamesList key="renderGamesList" className={ "gamesWrapper active animated fadeIn"}>
			{games.map(game => {
				let btns = [];
				let animation = "";
				
				btns.push(<Button 
					key="selectGame" 
					className={"gameSelection"}
					disabled={(selectedGame === game.name) ? true : false} 
					onClick={() => selectGame(game.name)} 
					value={game.name}
				/>);
				if(selectedGame === game.name) {
					animation = ( selectedGameMode ) ? "animated slideOutLeft" : "animated fadeIn";
					
					btns.push(<div key="renderGetSelectedGameMode" className={"gameModeSelection " + animation}>
						<Button 
							key="getSelectedGameModeTime" 
							className="button time fa fa-clock-o"
							disabled={(selectedGameMode && selectedGame === game.name) ? true : false} 
							onClick={() => selectGameMode("time")} 
							value="time" 
						/>
						<Button 
							key="getSelectedGameModeFree" 
							className="button free fa fa-flash"
							disabled={(selectedGameMode && selectedGame === game.name) ? true : false} 
							onClick={() => selectGameMode("free")} 
						value="free" 
						/>
					</div>);
				}
				if(selectedGame === game.name && selectedGameMode) {
					animation = ( selectedGameDifficult ) ? "animated slideOutLeft" : "animated slideInRight";
					
					btns.push(<div key="renderGetSelectedGameDifficult" className={"gameDifficultSelection " + animation}>
						<Button 
							key="getSelectedGameDifficultEasy" 
							className="button easy fa fa-th-large"
							disabled={(selectedGameDifficult && selectedGame === game.name) ? true : false} 
							onClick={() => selectGameDifficult("easy")} 
							value="easy" 
						/>
						<Button 
							key="getSelectedGameDifficultMedium" 
							className="button easy fa fa-th"
							disabled={(selectedGameDifficult && selectedGame === game.name) ? true : false} 
							onClick={() => selectGameDifficult("medium")} 
							value="medium" 
						/>
						<Button 
							key="getSelectedGameDifficultHard" 
							className="button easy fa fa-th"
							disabled={(selectedGameDifficult && selectedGame === game.name) ? true : false} 
							onClick={() => selectGameDifficult("hard")} 
							value="hard" 
						/>
					</div>);
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

Games.propTypes = {
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
	gameInit: PropTypes.func
}

const mapStateToProps = state => ({
	games: getGamesList(state.games),
	selectedGame: getSelectedGame(state),
	selectedGameMode: getSelectedGameMode(state),
	selectedGameDifficult: getSelectedGameDifficult(state)
})

const mapDispatchToProps = {
	selectGame,
	selectGameMode,
	selectGameDifficult
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Games)