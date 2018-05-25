import React,{ Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import MobileStepper from '@material-ui/core/MobileStepper';
import { FormControlLabel,FormGroup  } from '@material-ui/core/Form';
class Keluarga extends Component{
	constructor(props){
		super(props);
		var pasangan = this.props.fieldValues.muwarits ==='P'? "suami" : "istri";
		this.state  = {pasangan: pasangan, anak: false};
		this.saveAndNext = this.saveAndNext.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}	
	saveAndNext(e){
		e.preventDefault();
		console.log(this.ayah.checked);
		var data = {
			[this.state.pasangan]: this[this.state.pasangan].checked,
			ayah: this.ayah ?  this.ayah.checked: null,
			ibu: this.ibu ? this.ibu.checked  : null,
			anak: this.anak ?  this.anak.checked  : null,
			anakL: this.anakL ? parseInt(this.anakL.value)  : null,
			anakP: this.anakP ? parseInt(this.anakP.value)  : null
		}
		if  ( this.state.pasangan ==='istri'){
			if ( this[this.state.pasangan]){
				data['j'+this.state.pasangan] = this['j'+this.state.pasangan] ? parseInt(this['j'+this.state.pasangan].value) : null;
			}
		}
		this.props.saveValues(data);
		this.props.bagiWarisan();
		this.props.nextStep();
	}
	handleChange=(e) => {
		var trget = e.target.name;
		this.setState({
			[trget] : !this.state[trget]
		});
	}

	render(){
		var pasangan = this.state.pasangan;
		if ( this.anak ){
			var alert = <h1> Hello </h1>;
		}
 		const stepper=			<MobileStepper
        type="progress"
        steps={4}
        position="static"
        activeStep={this.props.step}
        onBack={this.props.prevStep}
        onNext={this.saveAndNext}
        disableBack={this.props.step === 0}
        disableNext={this.props.step === 3}
      /> ;
		return (
			<div>
			<FormGroup>
			<FormControlLabel
				control={
					<Checkbox
						inputRef={(input) => {this.ayah=input;}}
					/>}
				label="Ayah Masih Hidup "
			/>

			<FormControlLabel
				control={
					<Checkbox
						value="true"
						inputRef={(input) => {this.ibu=input;}}
					/>}
				label="Ibu Masih Hidup "
			/>

			<FormControlLabel
				control={
					<Checkbox
						value="true"
						name={pasangan}
						onClick={this.handleChange}
						inputRef={(input) => {this[pasangan]=input;}}
					/>}
				label={pasangan+" Masih Hidup "}
			/>
		{ this.state.istri ?
			<TextField
				label="Jumlah Istri"
				min={1}
				max={4}
				defaultValue={1}
				fullWidth
				inputRef={(input) => {this.jistri = input;}}
			  type="text"/>
			
			: '' }
			<FormControlLabel
				control={
					<Checkbox
						value="true"
						name="anak"
						onClick={this.handleChange}
						inputRef={(input) => {this.anak=input;}}
					/>}
				label="Anak Masih Hidup "
			/>
			{ this.state.anak ? 
				<div>
			<TextField
				label="Jumlah Anak Laki-Laki"
				min={0}
				max={5}
				defaultValue={0}
				fullWidth
				inputRef={(input) => {this.anakL = input;}}
			  type="text"/>

			<TextField
				label="Jumlah Anak Perempuan"
				min={0}
				max={5}
				defaultValue={0}
				fullWidth
				inputRef={(input) => {this.anakP = input;}}
				type="text" />	
				</div>
			: "" }
			</FormGroup>
			 
			{stepper}
			</div>
		);
	}

}

export default Keluarga;
