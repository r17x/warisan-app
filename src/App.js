import React,{ Component } from 'react';
import Harta from './Harta';
import Keluarga from './Keluarga';
import Finish from './Finish';
import Card from 'material-ui/Card';
import { FormGroup } from 'material-ui/Form';
//import MenuItem from 'material-ui/MenuItem';
//FInalStep
var fieldValues = {
	harta: 0,
	utang: 0,
	muwarits: null,
	wasiat: 0,
	tajhis: 0,
	test: null
};
var data;	
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
	createData(value){
		data = Object.assign({}, data, value);
		return data
	}
	bagiwarisan(){
		var ayah,ibu,anakL,anakP,istri,suami;
		if ( fieldValues.istri ){
			if (fieldValues.anak){
				istri = { name: 'istri', bagian : '1/8' };
				ayah = fieldValues.ayah ? { name: 'bapak', bagian : fieldValues.anakL > 0 ? '1/3' : '1/6' } : null;
				ibu = fieldValues.ibu ? { name: 'ibu' , bagian : '1/6' } : null;
			}
		}
		data = Object.assign({},data,[ayah,ibu,anakL,anakP,istri,suami]);
		return data;
	}
	render(){
		var form;
		switch(this.state.step){
			case 1: form =<Harta fieldValues={fieldValues}
				saveValues={this.saveValues}
				step={this.state.step}
				prevStep={this.prevStep}
				nextStep={this.nextStep}/>;	break;
			case 2:
				form = 		<Keluarga fieldValues={fieldValues}
				saveValues={this.saveValues}
				nextStep={this.nextStep}
				prevStep={this.prevStep} 
				step={this.state.step}
				bagiWarisan={this.bagiwarisan}
				finishStep={this.finishStep} />; break;
			case 3: 
				form = <Finish fieldValues={fieldValues}
											 saveValues={this.saveValues}
											 step={this.state.step}
											 nextStep={this.nextStep}
											 prevStep={this.prevStep}
							/>
		};
		return (
			<Card>
			<FormGroup>
			{form}
			</FormGroup>
			</Card>
		);
	}
}

App.defaultProps = {fieldValues};
export default App;
