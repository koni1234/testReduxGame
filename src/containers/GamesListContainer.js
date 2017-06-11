import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import { addToCart } from '../actions'
import { getGames } from '../reducers/games'
import Game from '../components/Game'
import GamesList from '../components/GamesList'

const GamesListContainer = ({ games /*, addToCart */}) => (
  <GamesList title="Games">
	{games.map(game =>
      <Game
        key={game.name}
        name={game.name}
        thumb={game.thumb}/>)}
  </GamesList>
)

GamesListContainer.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumb: PropTypes.string
  })).isRequired
}

const mapStateToProps = state => ({
  games: getGames(state.games)
})

export default connect(
  mapStateToProps/*,
  { addToCart }*/
)(GamesListContainer)