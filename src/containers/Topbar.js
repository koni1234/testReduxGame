import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { gamePause } from '../actions'
import { getVisibility } from '../reducers/topbar'
import Button from '../components/Button' 

class Topbar extends Component {
 
  /*componentWillReceiveProps(nextProps) {
		const { status, notifyAllSquaresFounded , squares , foundedSquares } = nextProps;
		
		if(status!=="allSquaresFounded" && foundedSquares.length > 0 && squares.length === foundedSquares.length ) {
			notifyAllSquaresFounded()
		}
  }*/
	
	render() {
		const { visible, gamePause } = this.props;
		const className= (visible) ? "topbar active animated fadeIn" : "topbar animated fadeOut";
		let output = [];
		
		output.push(<Button 
							key="renderPauseBtn" 
							className="button fa fa-pause-circle-o"
							onClick={() => gamePause()} 
							value="Pause" 
						/>)
		/*
		for(let i = 0; i<rows; i++) {
				let output2 = [];
				for(let y = 0; y<cells; y++) {
					let squareId = y+(i*cells)
					output2.push(<Square 
						key={"square-"+squareId} 
						found={squares[squareId].found} 
						visible={squares[squareId].visible}
						lastClicked={(lastClickedSquare === squareId) ? true : false}
						data={squares[squareId].data} 
						value={squares[squareId].value} 
						onClick={() => clickSquare( squareId )}
					/>);
				}
				output.push(<Row key={"row-"+i}>{output2}</Row>);
		}*/
  
		return(<div className={className}>{output}</div>)
	}
}

Topbar.propTypes = {
	visible: PropTypes.bool,
	gamePause: PropTypes.func
	/*squares: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.number,
		visible: PropTypes.bool,
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
	lastClickedSquare: PropTypes.number,
	clickSquare: PropTypes.func,
	status: PropTypes.string,
	notifyAllSquaresFounded: PropTypes.func*/
}


const mapStateToProps = state => ({
	  visible: getVisibility(state.topbar)
	/*	squares: getSquares(state.board),
		foundedSquares: getFoundedSquares(state.board),
		status: getStatus(state.board),
	  cells: getCells(state.board),
	  rows: getRows(state.board),
		clickedSquare: getClickedSquare(state.board),
		lastClickedSquare: getLastClickedSquare(state.board)*/
})

const mapDispatchToProps = {
	gamePause
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topbar)