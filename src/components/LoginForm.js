import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const LoginForm = ({ onClick, onChange, userName , tempName }) => {
	
  let visibilityClass = (userName !== undefined && userName.length >= 3 ) ? "loginForm animated fadeOut" : "loginForm animated fadeIn";
  let visibilityBtnClass = "loginForm__button fa fa-arrow-circle-right ";

	if (tempName !== undefined && tempName.length > 2 ) visibilityBtnClass += "animated fadeIn " 
	else  visibilityBtnClass += "animated fadeOut "
	
	return (
		
			<form className={visibilityClass} onSubmit={(e) => { e.preventDefault() }}>
			<h2 className="loginForm__title">Accedi</h2>
			<label className="loginForm__label" htmlFor="nome">Inserisci il tuo nome</label>
			<input 
				name="nome" autoComplete="off" className="loginForm__input" maxLength="6" onChange={onChange}
			/>
			<Button key="submit" className={visibilityBtnClass} onClick={onClick} value="procedi"  />
		</form>
	 );
}

LoginForm.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  userName: PropTypes.string,
  tempName: PropTypes.string
}

export default LoginForm