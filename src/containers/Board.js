import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { clickSquare , gameWin } from '../actions'
import { getSquares , getFoundedSquares , getClickedSquare , getCells , getRows } from '../reducers/board'
import Row from '../components/Row'
import Square from '../components/Square'

class Board extends Component {
 
  componentWillReceiveProps(nextProps) {
		const { gameWin , squares , foundedSquares } = nextProps;
		
		if(foundedSquares.length > 0 && squares.length === foundedSquares.length ) {
			gameWin()
		}
  }
	
	render() {
		const { cells , rows ,squares , clickSquare} = this.props;
		const className= (squares.length) ? "board active animated fadeIn" : "board animated fadeOut";
		
		let output = [];
		for(let i = 0; i<rows; i++) {
				let output2 = [];
				for(let y = 0; y<cells; y++) {
					let squareId = y+(i*cells)
					output2.push(<Square 
						key={"square-"+squareId} 
						found={squares[squareId].found} 
						visible={squares[squareId].visible} 
						data={squares[squareId].data} 
						value={squares[squareId].value} 
						onClick={() => clickSquare( squareId )}
					/>);
				}
				output.push(<Row key={"row-"+i}>{output2}</Row>);
		}
  
		return(<div className={className}>{output}</div>)
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
	clickSquare: PropTypes.func,
	gameWin: PropTypes.func
}


const mapStateToProps = state => ({
		squares: getSquares(state.board),
		foundedSquares: getFoundedSquares(state.board),
	  cells: getCells(state.board),
	  rows: getRows(state.board),
		clickedSquare: getClickedSquare(state.board)
})

const mapDispatchToProps = {
	clickSquare,
	gameWin
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)