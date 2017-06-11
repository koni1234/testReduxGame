import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ onClick, /*onChange,*/ userName , tempName }) => {
	
  if(userName !== undefined && userName.length >= 3 ) {
    return;
  }

  let visibilityBtnClass = "loginForm__button fa fa-arrow-circle-right ";

	if (tempName !== undefined && tempName.length > 2 ) visibilityBtnClass += "animated fadeIn "
	
	return (
			<form className="loginForm" onSubmit={(e) => { e.preventDefault() }}>
			<h2 className="loginForm__title">Accedi</h2>
			<label className="loginForm__label" htmlFor="nome">Inserisci il tuo nome</label>
			<input 
				name="nome" autoComplete="off" className="loginForm__input" maxLength="6" /*onChange={onChange}*/
			/>
			<button key="submit" className={visibilityBtnClass} onClick={onClick} >
				procedi
			</button>
		</form>
	 );
}

LoginForm.propTypes = {
  onClick: PropTypes.func,
  //onChange: PropTypes.func,
  userName: PropTypes.string,
  tempName: PropTypes.string
}

export default LoginForm