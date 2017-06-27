import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ disabled, onClick, value , className}) => {
	return(
		<button className={className} disabled={disabled} onClick={onClick}>
			{value}
		</button>
	)
}

Button.propTypes = {
	disabled: PropTypes.bool,
	value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
	className: PropTypes.string
}

export default Button