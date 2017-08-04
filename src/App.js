import React,{ Component } from 'react';
import Harta from './Harta';
import Keluarga from './Keluarga';
import Finish from './Finish';

//FInalStep

var fieldValues = {
	harta: 0,
	utang: 0,
	muwarits: null,
	wasiat: 0,
	tajhis: 0,
};

class App extends Component {
	constructor(props){
		super(props);
		this.state = {step:1};
		this.nextStep = this.nextStep.bind(this);
		this.prevStep = this.prevStep.bind(this);
		this.saveValues= this.saveValues.bind(this);
	}
	getInitialState(){
		return ({ 
			step : 1
		});
	}
	saveValues(fields){
		fieldValues=  Object.assign({},fieldValues, fields);
		return fieldValues;
	}
	nextStep(){
		this.setState({
			step : this.state.step + 1
		});
	}
	prevStep(){
		this.setState({
			step : this.state.step -1
		});
	}
	finishStep(){
		this.setState({
			step : 4
		});
	}
	render(){
		switch(this.state.step){
		//`	case 1:
		//`		return <AccountFields fieldValues={fieldValues}
		//`													nextStep={this.nextStep}
		//`													saveValues={this.saveValues}/>
			case 1:
				return <Harta fieldValues={fieldValues}
											saveValues={this.saveValues}
											nextStep={this.nextStep} />
			case 2:
				return <Keluarga fieldValues={fieldValues}
											saveValues={this.saveValues}
											nextStep={this.nextStep}
											prevStep={this.prevStep} 
											finishStep={this.finishStep} />
			//case 2:
			//	return <SurveyFields fieldValues={fieldValues}
			//											 nextStep={this.nextStep}
			//											 previousStep={this.previousStep}
			//											 saveValues={this.saveValues}/>
			//case 3:
			//	return <Confirmation fieldValues={fieldValues}
			//											 previosStep={this.previosStep}
			//											 submitRegistration={this.submitRegistration}/>
			//case 4:
			//	return <Success fieldValues={fieldValues} />
			default: return <Finish/>;
		}
	}
}

App.defaultProps = {fieldValues};
export default App;
