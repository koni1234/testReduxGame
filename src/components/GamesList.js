
import React from 'react'
import PropTypes from 'prop-types'

const GamesList = ({ children }) => (
  <div>
    <h3>Select a game</h3>
    <ul className="games">{children}</ul>
  </div>
)

GamesList.propTypes = {
  children: PropTypes.node
}

export default GamesList