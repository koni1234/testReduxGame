import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ disabled, onClick, value}) => {
	return(
		<button disabled={disabled} onClick={onClick}>
			{value}
		</button>
	)
}

Button.propTypes = {
	disabled: PropTypes.bool,
	value: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Button