import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startTimer , stopTimer } from '../actions'
import { getTime , getTimer } from '../reducers/timer'

class Timer extends Component { 

	constructor(props) {
    super(props)
    this.state = {pause: false }
  }
	
	componentDidMount(){
		const { startTimer} = this.props;
		startTimer()
	}
	
	componentWillReceiveProps(nextProps) {
		const { startTimer , stopTimer , timer } = nextProps;
		const nextPause = nextProps.pause;
		const { pause } = this.props;
		
		if(pause && !nextPause ) {
			startTimer()
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
		time: PropTypes.number,
		timer: PropTypes.number,
		startTimer: PropTypes.func,
		stopTimer: PropTypes.func
}

const mapStateToProps = state => ({
	 time: getTime(state.timer),
	 timer: getTimer(state.timer)
})

const mapDispatchToProps = {
	startTimer,
	stopTimer
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer)