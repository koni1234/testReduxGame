import React from 'react'
import PropTypes from 'prop-types'

const Game = ({ name, thumb }) => (
  <li>
    {name}
		<img src={thumb} alt={name}/>
  </li>
)

Game.propTypes = {
  name: PropTypes.string,
  thumb: PropTypes.string
}

export default Game