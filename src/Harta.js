import React,{ Component } from 'react';
import TextField from 'material-ui/TextField';
import Radio from 'material-ui/Radio';	

class Harta extends Component{
	constructor(props){
		super(props);
		this.saveAndContinue = this.saveAndContinue.bind(this);
		this.handleRadio = this.handleRadio.bind(this);
		this.state = { muwarits:'' };
	}
	saveAndContinue(e){
		//e is event
		e.preventDefault();
		var harta =  this.harta.value;
		var utang = this.utang.value;
		var wasiat =this.wasiat.value;
		var	tajhis = this.tajhis.value;
		var data = {
			harta : harta,
			utang : utang,
			muwarits : this.state.muwarits,
			tajhis : tajhis,
			wasiat : wasiat,
			alrits: harta-utang-wasiat-tajhis,
			ayah: false,
			ibu: false,
			istri: false,
			anak: false
		}
		this.props.saveValues(data);
		this.props.nextStep();
	}
	handleRadio(e){
		this.setState({
			muwarits:e.target.value
		});
	}
	render(){
		var harta = this.props.fieldValues.harta;
		var tajhis = this.props.fieldValues.tajhis;
		var utang = this.props.fieldValues.utang;
		var wasiat = this.props.fieldValues.wasiat;
		var muwarits = this.state.muwarits;
		return (
			<div>
			
			<TextField
				label="Jumlah Harta"
			  fullWidth
			  inputRef={(input) => {this.harta = input;}}
				defaultValue={harta} type="text"/>
			<TextField
				label="Hutang"
				fullWidth
				inputRef={(input) => {this.utang = input;}}
				defaultValue={utang} type="text"/>
			<TextField
				label="Wasiat"
				fullWidth
				inputRef={(input) => {this.wasiat = input;}}
				defaultValue={wasiat} type="text"/>
			<TextField
				label="Tajhis(Pengurusan Jenasah)"
				fullWidth
				inputRef={(input) => {this.tajhis = input;}}
				defaultValue={tajhis} type="text"/>

			<Radio
				checked={muwarits==='L'}
				onClick={this.handleRadio}
				inputRef={(input) => {this.muwarits = input;}}
				value="L"
				muwarits={muwarits}
				id="muwarits"
				label="Laki-Laki" aria-label="Laki-Laki" />
			
					<button onClick={this.saveAndContinue} className="btn btn-primary pull-right">Lanjut</button>
				
			</div>
		);
	}

}

export default Harta;
