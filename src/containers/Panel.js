import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import { clickSquare , gameWin } from '../actions'
import { getVisibility } from '../reducers/panel'

class Panel extends Component {
 
  /*componentWillReceiveProps(nextProps) {
		const { gameWin , squares , foundedSquares } = nextProps;
		
		if(foundedSquares.length > 0 && squares.length === foundedSquares.length ) {
			gameWin()
		}
  }*/
	
	render() {
		const { children, visible} = this.props;
		const className= (visible) ? "panel active animated fadeIn" : "panel animated fadeOut"; 
  
		return(<div className={className}>{children}</div>)
	}
}

Panel.propTypes = {
		visible: PropTypes.bool,
		children: PropTypes.node
}/*
	squares: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.number,
		found: PropTypes.bool,
		firstView: PropTypes.bool,
  	data: PropTypes.shape({
			name: PropTypes.name,
			image: PropTypes.image
		})
  })),
  rows: PropTypes.number,
	cells: PropTypes.number,
	clickedSquare: PropTypes.number,
	clickSquare: PropTypes.func,
	gameWin: PropTypes.func*/


const mapStateToProps = state => ({
	  visible: getVisibility(state.panel)
})/*
		squares: getSquares(state.board),
		foundedSquares: getFoundedSquares(state.board),
	  cells: getCells(state.board),
	  rows: getRows(state.board),
		clickedSquare: getClickedSquare(state.board)*/

const mapDispatchToProps = {
}/*
	clickSquare,
	gameWin*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel)