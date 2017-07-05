import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startTimer , stopTimer , notifyTimeUp } from '../actions'
import { getTime , getTimer } from '../reducers/timer'

class Timer extends Component { 

	componentDidMount(){
		const { mode , startTimer , startTime} = this.props;
		startTimer(mode , startTime)
	}
	
	componentWillReceiveProps(nextProps) {
		const { mode, startTimer , stopTimer , notifyTimeUp , timer , time } = nextProps;
		const nextPause = nextProps.pause;
		const { pause } = this.props;
		
		if(mode ==="countdown" && time <= 0) {
			stopTimer(timer)
			notifyTimeUp()
		}
		else if(pause && !nextPause ) {
			startTimer( mode )
		}
		else if(!pause && nextPause ) {
			stopTimer(timer)
		}
  }
	
	componentWillUnmount(){
		const { stopTimer , timer } = this.props;
		stopTimer(timer)
	}
	
	render() {
		const { time } = this.props;
		const className= "timer active animated fadeIn"  
  
		return(<div className={className}><span>{time}</span></div>)
	}
}
					 
Timer.propTypes = {
		pause: PropTypes.bool,
		mode: PropTypes.string,
		time: PropTypes.number,
		timer: PropTypes.number,
		startTime: PropTypes.number,
		startTimer: PropTypes.func,
		stopTimer: PropTypes.func,
		notifyTimeUp: PropTypes.func
}

const mapStateToProps = state => ({
	 time: getTime(state.timer),
	 timer: getTimer(state.timer)
})

const mapDispatchToProps = {
	startTimer,
	stopTimer,
	notifyTimeUp
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer)