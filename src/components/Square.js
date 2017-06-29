import React from 'react'
import PropTypes from 'prop-types'

const Square = ({ value , found , visible , data , onClick }) => {
	const className = (visible || found) ? "square visible" : "square";
	const classNameSpan = (visible || found) ? "animated slideInUp" : "";
	 
		return (
			<button className={className} onClick={onClick}>
				<span className={classNameSpan}>{data.name}</span>
				<img src={data.image} alt={data.name}/>
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
	onClick: PropTypes.func
}

export default Square
 /*


	const found = (props.visible && props.found) ? true : false;
	const visible = (props.visible) ? true : false;
	const lastClicked = (props.clicked) ? true : false;
	const classes = (found) ? "visible found" : (visible) ? "visible" : (lastClicked) ? "clicked" : "";
	
	return (
		<button className={classes + " square"} onClick={() => props.onClick()}>
			<span className={(found) ? "animated fadeInUp" : ""}>{props.data.name}</span>
			<img className={(lastClicked && !found ) ? "animated fadeInOut" : ""} src={props.data.image} alt={props.data.name}/>
    	</button>
  	);*/