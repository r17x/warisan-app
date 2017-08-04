import React,{ Component } from 'react';

class AccountFields extends Component{
	constructor(props){
		super(props);
		this.saveAndContinue = this.saveAndContinue.bind(this);
	}
	render(){
		return (
			<div>
			      <label>Name</label> 
			      <input type="text"
			             ref="name"
			             defaultValue={ this.props.fieldValues.name } />

			      <label>Password</label>
			      <input type="password"
			             ref="password"
			             defaultValue={ this.props.fieldValues.password } />

			      <label>Email</label>
			      <input type="email"
			             ref="email"
			             defaultValue={ this.props.fieldValues.email } />

			      <button onClick={ this.saveAndContinue }>Save and Continue</button>
		</div>
		)
	}
	saveAndContinue(e){
		e.preventDefault();
		var data = {
			name : this.refs.name.value,
			password : this.refs.password.value,
			email : this.refs.email.value,
		}
		var x= 	this.props.saveValues(data);
		console.log(x);
		this.props.nextStep();
	}
}


export default AccountFields;			
