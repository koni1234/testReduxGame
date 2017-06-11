import React from 'react'
import PropTypes from 'prop-types'

const Game = ({ name, thumb, onSelectGameClicked}) => (
  <li className="game">
    <span>{name}</span>
		<img src={thumb} alt={name}/>
		<button onClick={onSelectGameClicked}>select game</button>
  </li>
)

Game.propTypes = {
  name: PropTypes.string,
  thumb: PropTypes.string,
	onSelectGameClicked: PropTypes.func.isRequired
}

export default Game