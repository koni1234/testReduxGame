import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getScore } from '../reducers/index'

class Score extends Component { 
	
	render() {
		const { score } = this.props;
		const className= "score active animated fadeIn"  
  
		return(<div className={className}><span>{score} <i className="fa fa-trophy"></i></span></div>)
	}
}
					 
Score.propTypes = {
		score: PropTypes.number
}

const mapStateToProps = state => ({
	 score: getScore(state)
})

const mapDispatchToProps = { }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Score)