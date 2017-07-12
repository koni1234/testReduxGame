import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { clickSquare , notifyBoardReady , notifyAllSquaresFounded , notifySquaresFounded , notifyShuffleEnd } from '../actions'
import { getStatus , getSquares , getFoundedSquares , getClickedSquare , getLastClickedSquare , getCells , getRows } from '../reducers/board'
import Row from '../components/Row'
import Square from '../components/Square'

class Board extends Component {
 
  componentWillReceiveProps(nextProps) {
		const { status, notifyBoardReady , notifyAllSquaresFounded , squares, notifySquaresFounded , notifyShuffleEnd } = nextProps;
		const nextFoundedSquares = nextProps.foundedSquares;
		const { foundedSquares } = this.props;
		
		if(squares.length && status === "") {
			notifyBoardReady()
		}
		if( nextFoundedSquares.length > 0 && nextFoundedSquares.length > foundedSquares.length ) {
			notifySquaresFounded()
		}
		if(status!=="allSquaresFounded" && nextFoundedSquares.length > 0 && squares.length === nextFoundedSquares.length ) {
			notifyAllSquaresFounded()
		}
		if(status === "shuffleEnd") {
			const board = document.getElementById('board')
			board.removeEventListener('animationend', notifyShuffleEnd );
		}
		if(status === "onShuffle") {
			const board = document.getElementById('board')
			board.addEventListener('animationend', notifyShuffleEnd );
		}
  }
	
	render() {
		const { status , cells , rows ,squares , clickSquare , lastClickedSquare } = this.props;
		let className= "board animated ";
		if(squares.length) className += "active fadeIn" 
		else className += "fadeOut";
		
		let output = [];
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
				output.push(<Row key={"row-"+i} className={(status === "onShuffle") ? "animated shuffle" : ""}>{output2}</Row>);
		}
  
		return(<div id="board" className={className}>{output}</div>)
	}
}

Board.propTypes = {
	squares: PropTypes.arrayOf(PropTypes.shape({
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
	notifyAllSquaresFounded: PropTypes.func,
	notifySquaresFounded: PropTypes.func,
	notifyShuffleEnd: PropTypes.func,
	notifyBoardReady: PropTypes.func
}


const mapStateToProps = state => ({
		squares: getSquares(state.board),
		foundedSquares: getFoundedSquares(state.board),
		status: getStatus(state.board),
	  cells: getCells(state.board),
	  rows: getRows(state.board),
		clickedSquare: getClickedSquare(state.board),
		lastClickedSquare: getLastClickedSquare(state.board)
})

const mapDispatchToProps = {
	clickSquare,
	notifyBoardReady,
	notifyAllSquaresFounded,
	notifySquaresFounded,
	notifyShuffleEnd
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)