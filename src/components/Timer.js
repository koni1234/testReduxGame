import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startTimer , stopTimer } from '../actions'
import { getTime , getTimer } from '../reducers/timer'

class Timer extends Component { 

	componentDidMount(){
		const { startTimer} = this.props;
		startTimer()
	}
	
	componentWillUnmount(){
		const { stopTimer , timer } = this.props;
		stopTimer(timer)
	}
	/*
	checkTimer() {
		const pause = this.state.pause;
		const startTime = this.state.startTime;
		const time = this.state.time;
			
		if(!pause && startTime > 0 ) {
			let newTime = time + 1; 
			let looser = false;
			
			if(looser) {
				this.setState({
					gameStatus: "lose",
					time: newTime 
				});
			}
			else {
				this.setState({time: newTime });
			}
		}
	} */
	
	render() {
		const { time } = this.props;
		const className= "timer active animated fadeIn"  
  
		return(<div className={className}>{time}</div>)
	}
}
					 
Timer.propTypes = {
		pause: PropTypes.bool,
		startTime: PropTypes.number,
		time: PropTypes.number,
		timer: PropTypes.number,
		startTimer: PropTypes.func,
		stopTimer: PropTypes.func
}

const mapStateToProps = state => ({
	 time: getTime(state.topbar.timer),
	 timer: getTimer(state.topbar.timer)
})/*
		squares: getSquares(state.board),
		foundedSquares: getFoundedSquares(state.board),
	  cells: getCells(state.board),
	  rows: getRows(state.board),
		clickedSquare: getClickedSquare(state.board)*/

const mapDispatchToProps = {
	startTimer,
	stopTimer
}/*
	clickSquare,
	gameWin*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer)