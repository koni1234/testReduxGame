import React , { Component } from 'react'
import { connect } from 'react-redux'
import { login , checkLoginForm } from '../actions'
import { getUserName, getTempName } from '../reducers/users'
import PropTypes from 'prop-types'
import LoginForm from '../components/LoginForm'
 
class UserPanel extends Component {
 
	
	render() {
		const { checkLoginForm , login , userName , tempName } = this.props; 
		 				
		return(
			<LoginForm
				userName={userName}
				tempName={tempName}
    		onChange={(e) => checkLoginForm(e.target.value) }
    		onClick={() => login(tempName)} />
		)
	}
}

UserPanel.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  userName: PropTypes.string,
  tempName: PropTypes.string,
	checkLoginForm: PropTypes.func,
	login: PropTypes.func
}


const mapStateToProps = (state) => ({
	userName: getUserName(state.users),
	tempName: getTempName(state.users)
})

const mapDispatchToProps = {
	login , checkLoginForm
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPanel)


/*
class UserPanel extends React.Component {
	constructor(props) {
    	super(props);
		
		this.state = {
			tempName: "",
			userName: ""
		};
		
		this.handleChangeLoginForm = this.handleChangeLoginForm.bind(this);
	}
	
	handleChangeLoginForm(e) { 
		this.setState({
			tempName: e.target.value
		});
	}
	
	submitLoginForm() {
		const userName = this.state.tempName;
		
		localStorage.setItem('userData', JSON.stringify({userName: userName}));
		this.setState({
			userName: userName
		});
	}
	
	reset() {
		localStorage.removeItem('userData');
		
		this.setState({
			tempName: "",
			userName: ""
		});
	}
	
	saveLog(log) {
		let logs =  JSON.parse(localStorage.getItem('userLogs') || '[]');
	
		if(typeof log === "object") logs.push(log);
		
    	localStorage.setItem('userLogs', JSON.stringify(logs));
		
		this.setState({
			userLogs: logs
		});
	}

	componentDidMount() { 
		const userData =  JSON.parse(localStorage.getItem('userData') || '{}');
		
		this.setState({
			userName: userData.userName
		});
	}
	
	renderLoginForm() {
		const value = this.state.tempName ;
		let visibilityBtnClass = "submit fa fa-arrow-circle-right ";
			
		if (value.length > 2 ) visibilityBtnClass += "animated fadeIn "
			
		return (<form>
				<h2>Accedi</h2>
				<label htmlFor="nome">Inserisci il tuo nome</label>
				<input name="nome"  autoComplete="off" value={value} className="nome" maxLength="6" onChange={this.handleChangeLoginForm} />
				<Button
						key="submit"
						value="procedi"
						className={visibilityBtnClass}
						onClick={() => this.submitLoginForm()}
					/>
				</form>);	
	}
	
	render() {
		const username = this.state.userName;
		const className = (!username || username === undefined || username.length < 3) ? 'userPanel loginForm animated fadeIn' : 'userPanel';
		let output = [];
		
		if(!username || username === undefined || username.length < 3) {
			output.push(this.renderLoginForm());
		}
		
		return (
			<div key="userPanel" className={className}>
				{output}
			</div>
    	);
	}
};

*/ 