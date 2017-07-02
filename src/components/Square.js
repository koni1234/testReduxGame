import React from 'react'
import PropTypes from 'prop-types'

const Square = ({ value , found , visible , data , lastClicked , onClick }) => {
	const className = (visible || found) ? "square visible" : "square";
	const classNameSpan = (visible || found) ? "animated slideInUp" : "";
	const classNameImg = (lastClicked && !found && !visible) ? "animated fadeInOut" : "";
	 
		return (
			<button className={className} onClick={onClick}>
				<span className={classNameSpan}>{data.name}</span>
				<img className={classNameImg} src={data.image} alt={data.name}/>
			</button>
		)
}

Square.propTypes = {
  value: PropTypes.number,
	found: PropTypes.bool,
	visible: PropTypes.bool,
	data: PropTypes.shape({
		name: PropTypes.string,
		image: PropTypes.string
	}),
	lastClicked: PropTypes.bool,
	onClick: PropTypes.func
}

export default Square