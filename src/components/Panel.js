import React from 'react'
import PropTypes from 'prop-types'

const Panel = ({ children }) => {
	const className = "panel active animated fadeIn"
	
	return (
		<div className={className}>{children}</div>
	)
}

Panel.propTypes = {
		children: PropTypes.node
}

export default Panel