import React from 'react'
import PropTypes from 'prop-types'

const Game = ({ name, thumb, selected, onSelectGameClicked}) => (
  <li className={(selected) ? "game selected" : "game"}>
    <span>{name}</span>
		<img src={thumb} alt={name}/>
		<button onClick={onSelectGameClicked}>select game</button>
  </li>
)

Game.propTypes = {
  name: PropTypes.string,
  thumb: PropTypes.string,
	selected: PropTypes.bool.isRequired,
	onSelectGameClicked: PropTypes.func.isRequired
}

export default Game