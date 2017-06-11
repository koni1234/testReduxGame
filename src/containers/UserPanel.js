import React from 'react'
import { connect } from 'react-redux'
import { getUserData, setUserData } from '../actions'
import PropTypes from 'prop-types'
import LoginForm from '../components/LoginForm'  

const UserPanel = ({ getUserData, setUserData, userName , tempName }) => (
		
  <LoginForm
    userName={userName}
    tempName={tempName}
    /*onChange={() => undefined }*/
    onClick={() => setUserData(userName)} />
)

UserPanel.propTypes = {
  onClick: PropTypes.func,
  //onChange: PropTypes.func,
  userName: PropTypes.string,
  tempName: PropTypes.string
}


const mapStateToProps = (state) => ({
	userName: getUserData(state)//,
	//tempName: checkLoginForm.tempName
})

export default connect(
  mapStateToProps,
  {  getUserData, setUserData }
)(UserPanel)