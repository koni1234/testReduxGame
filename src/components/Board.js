import React, { PropTypes } from 'react'
import Row from './Row'
import Square from './Square'

const Board = ({ rows, cells }) => {
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

Board.propTypes = {
  rows: PropTypes.string,
	cells: PropTypes.string
}

export default Board