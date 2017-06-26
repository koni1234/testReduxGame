import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Square extends Component {
	
	render() {
		const { value , found , visible , data } = this.props;

		return (
			<div>
				<span className={""}>{data.name}</span>
				<img className={""} src={data.image} alt={data.name}/>
			</div>
		)
	}
}

Square.propTypes = {
  value: PropTypes.number,
	found: PropTypes.bool,
	visible: PropTypes.bool,
	data: PropTypes.shape({
		name: PropTypes.string,
		image: PropTypes.string
	})
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