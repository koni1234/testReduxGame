import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { clickSquare } from '../actions'
import { getSquares , getVisibleSquare , getClickedSquare , getCells , getRows } from '../reducers/board'
import Row from './Row'
import Square from './Square'

class Board extends Component {
	
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
		//			clicked={(this.state.lastClickedSquare === i ) ? true : false}
		//  onClick={() => this.handleClick(i)} 
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
	visibleSquare: PropTypes.number,
	clickedSquare: PropTypes.number,
	clickSquare: PropTypes.func
}


const mapStateToProps = state => ({
		squares: getSquares(state.board),
	  cells: getCells(state.board),
	  rows: getRows(state.board),
		visibleSquare: getVisibleSquare(state.board),
		clickedSquare: getClickedSquare(state.board)
})

const mapDispatchToProps = {
	clickSquare
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)