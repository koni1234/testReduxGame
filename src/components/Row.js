import React from 'react'
import PropTypes from 'prop-types'

const Row = ({ className, children }) => {
	
	const cssClass = (className !== undefined && className.length) ? className + " row" : "row"
	
	return (<div className={cssClass}>
    {children}
  </div>)
}

Row.propTypes = {
	className: PropTypes.string,
  children: PropTypes.node
}

export default Row