import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getSquares , getCells , getRows } from '../reducers/board'
import Row from './Row'
import Square from './Square'

class Board extends Component {
	
	render() {
		const { cells , rows } = this.props;
		let output = [];
		for(let i = 0; i<rows; i++) {
				let output2 = [];
				for(let y = 0; y<cells; y++) {
					output2.push(<Square>asd</Square>);
				}
				output.push(<Row>{output2}</Row>);
		}
  
		return(<div>{output}</div>)
	}
}

Board.propTypes = {
	squares: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.number,
		visible: PropTypes.bool,
		found: PropTypes.bool,
		firstView: PropTypes.bool,
  	data: PropTypes.node
  })),
  rows: PropTypes.number,
	cells: PropTypes.number
}


const mapStateToProps = state => ({
		squares: getSquares(state.board),
	  cells: getCells(state.board),
	  rows: getRows(state.board)
})

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)