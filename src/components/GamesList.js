
import React from 'react'
import PropTypes from 'prop-types'

const GamesList = ({ children , className }) => (
  <div className={className}>
    <h3>Select a game</h3>
    <ul className="games">{children}</ul>
  </div>
)

GamesList.propTypes = {
	className: PropTypes.string,
  children: PropTypes.node
}

export default GamesList