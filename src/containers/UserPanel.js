import React from 'react'
import { connect } from 'react-redux'
import { checkSession, checkLoginForm, login } from '../actions'






let UserPanel = ({ dispatch }) => {
	
	if(checkSession.userName !== undefined && checkSession.userName.length >= 3 ) return;	
	
	let input;
	let visibilityBtnClass = "loginForm__button fa fa-arrow-circle-right ";
		
	if (checkLoginForm.tempName.length > 2 ) visibilityBtnClass += "animated fadeIn "
	
	return (
		<form className="loginForm" onSubmit={(e) => { e.preventDefault() }}>
			<h2 className="loginForm__title">Accedi</h2>
			<label className="loginForm__label" htmlFor="nome">Inserisci il tuo nome</label>
			<input 
				name="nome" autoComplete="off" className="loginForm__input" maxLength="6" onChange={
					dispatch(checkLoginForm(input.value))
				}
			/>
			<button key="submit" className={visibilityBtnClass} onClick={dispatch(login(input))} />
				procedi
			</button>
		</form>
	)
}

UserPanel = connect()(UserPanel)

export default UserPanel