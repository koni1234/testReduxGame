import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectGame } from '../actions'
import { getGames , getSelectedGame } from '../reducers/games'
import Game from '../components/Game'
import GamesList from '../components/GamesList'

const GamesListContainer = ({ games , selectGame }) => (
  <GamesList title="Games">
	{games.map(game =>
      <Game
        key={game.name}
        name={game.name}
        thumb={game.thumb}
				onSelectGameClicked={() => selectGame(game.name)}
			 />)}
  </GamesList>
)

GamesListContainer.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumb: PropTypes.string
  })).isRequired,
	selectedGame: PropTypes.string,
	selectGame: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  games: getGames(state.games),
	selectedGame: getSelectedGame(state.selectedGame)
})

export default connect(
  mapStateToProps,
  { selectGame }
)(GamesListContainer)