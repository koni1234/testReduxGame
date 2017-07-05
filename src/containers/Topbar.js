import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { gamePause } from '../actions'
import { getVisibility } from '../reducers/topbar'
import { getGameStatus , getSelectedGameMode } from '../reducers/index'
import Timer from '../components/Timer'
import Score from '../components/Score'
import Button from '../components/Button' 

class Topbar extends Component {
	
	render() {
		const { visible, gamePause , gameStatus, gameMode } = this.props;
		const className= (visible) ? "topbar active animated fadeIn" : "topbar animated fadeOut";
		let output = [];
				
		output.push(<Button 
			key="renderPauseBtn" 
			className="button fa fa-pause-circle-o"
			onClick={() => gamePause()} 
			value="Pause" 
		/>)							
		
		output.push(<Score />)
			
		if(gameStatus && gameStatus !== "" ) {
			output.push(<Timer 
				mode={(gameMode === "time") ? "countdown" : "timer"} 
				startTime= {(gameMode === "time") ? 60 : 0 } 
				pause={(gameStatus === "play" ) ? false : true }
			/>)
		}
		
		return(<div className={className}>{output}</div>)
	}
}

Topbar.propTypes = {
	visible: PropTypes.bool,
	gamePause: PropTypes.func,
	gameStatus: PropTypes.string,
	gameMode: PropTypes.string
}


const mapStateToProps = state => ({
	visible: getVisibility(state.topbar),
	gameStatus: getGameStatus(state),
	gameMode: getSelectedGameMode(state)
})

const mapDispatchToProps = {
	gamePause
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topbar)