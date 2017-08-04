import React,{ Component } from 'react';

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
		var harta =  this.refs.harta.value;
		var utang = this.refs.utang.value;
		var wasiat =this.refs.wasiat.value;
		var	tajhis = this.refs.tajhis.value;

		var data = {
			harta : this.refs.harta.value,
			utang : this.refs.utang.value,
			muwarits : this.state.muwarits,
			tajhis : this.refs.tajhis.value,
			wasiat : this.refs.wasiat.value,
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
			[e.target.id]:e.target.value
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
				<div className="form-horizontal">
					<div className="form-group">
						<label className="form-label"> Harta : </label>
						<input type="number" pattern="[0-9]*" inputMode="numeric"	 ref="harta" className="form-control" defaultValue={harta}/>
					</div>
					<div className="form-group">
						<label className="form-label"> Muwarits : </label>
						<div className="radio-inline">
							<label><input type="radio" id="muwarits" onClick={this.handleRadio} ref="muwarits" value="L" checked={muwarits==='L'}/> Laki-Laki</label>
							<label><input type="radio" id="muwarits" onClick={this.handleRadio} ref="muwarits" value="P" checked={muwarits==='P'}/> Perempuan</label>
						</div>
					</div>
					<div className="form-group">
						<label> Wasiat : </label>
						<input type="number" pattern="[0-9]*" inputMode="numeric" ref="wasiat" className="form-control" defaultValue={wasiat}/>
					</div>
					<div className="form-group">
						<label> Utang : </label>
						<input type="number" pattern="[0-9]*" inputMode="numeric" ref="utang" className="form-control" defaultValue={utang} />
					</div>
					<div className="form-group">
						<label> Tajhis : </label>
						<input type="text" ref="tajhis" className="form-control" defaultValue={tajhis}/>
					</div>
					
					<button onClick={this.saveAndContinue} className="btn btn-primary pull-right">Lanjut</button>
				
				</div>
			</div>
		);
	}

}

export default Harta;
