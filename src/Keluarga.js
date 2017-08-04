import React,{ Component } from 'react';

class Keluarga extends Component{
	constructor(props){
		super(props);
		var pasangan = this.props.muwarits ==='P'? "suami" : "istri";
		this.state  = {pasangan: pasangan};
	}	
	saveAndNext(e){
		e.preventDefault();
		var data = {
			[this.state.pasangan]: this.refs[this.state.pasangan].value,
			ayah: this.refs.ayah.value,
			ibu: this.refs.ibu.value,
			anak: this.refs.anak.value
		}
		this.props.saveValues(data);
		console.log(this.state.step);
	}
	render(){
		var pasangan = this.state.pasangan;
		return (
			<div>
			<div className="checkbox">
			<label><input type="checkbox" name="ayah" ref="ayah" value="true"/> Ayah Masih Hidup</label>
			</div>
			<div className="checkbox">
			<label><input type="checkbox" name="ibu" ref="ibu" value={true}/> Ibu Masih Hidup</label>
			</div>
			<div className="checkbox">
			<label><input type="checkbox" name={pasangan} ref={pasangan} value={true}/> Punya {pasangan} </label>
			</div>	
			<div className="checkbox">
			<label><input type="checkbox" ref="anak" name="anak" value={true}/> Punya Anak</label>
			</div>
			<div class="justify-content-md-center">
			<button className="btn btn-danger" onClick={this.props.prevStep}>
			Kembali
			</button>
			<button className="btn btn-primary pull-right" onClick={this.saveAndNext.bind(this)}>
			Lanjut
			</button>
			</div>
			</div>
		);
	}

}

export default Keluarga;
