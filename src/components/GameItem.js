import React from 'react'
import PropTypes from 'prop-types'

const GameItem = ({ name, thumb, selected, children}) => {
	
	let disabledSelectGameBtn = (selected) ? true : false;
	
  return(
		<li className={(selected) ? "game selected" : "game"}>
			<span>{name}</span>
			<img src={thumb} alt={name}/>
			{children}
  	</li>
	)
}

GameItem.propTypes = {
  name: PropTypes.string,
  thumb: PropTypes.string,
	selected: PropTypes.bool.isRequired,
  children: PropTypes.node
}

export default GameItem