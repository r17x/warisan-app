import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import NumberFormat from 'react-number-format';
import MobileStepper from '@material-ui/core/MobileStepper';

const styleSheet = createStyleSheet(theme => ({
	  paper: {
			    width: '100%',
			    marginTop: theme.spacing.unit * 3,
			    overflowX: 'auto',
			  },
}));
var data = [];
class Finish extends Component{
	constructor(props){
		super(props);
		data = this.Hasil();
///		data = [{name: 'yyy', bagian: 1, jumlah: '111'}];
	}
	/// 1/2 
	//Anak perempuan
	//Anak perempuan dari anak laki-laki (cucu perempuan)
	//Saudara perempuan seayah dan seibu
	//Saudara perempuan seayah
	//Suami jika tidak memiliki anak atau cucu laki-laki
	//
	// @p -> props / object
	satu2(p){
	
	}

	Hasil(){
	  let ayah,ibu,anakL,anakP,istri,suami;
		//var valNul = { name : null, jumlah: null, bagian: null} ;	
		//data = [ayah,ibu,anakL,anakP,istri,suami];
		var d = this.props.fieldValues;
		var alrits = d.alrits;
	//	let istri,anak,bapak,ibu,suami;
		var data = [];
		var bgbpk;
		let sisa = d.alrits;
		//let ford = ['suami','istri','anak','ibu','bapak','anakL','anakP'];
		//fodrd.map(f=>{
		//		if(d[f])	
		//});
		if ( d.suami ) {
				suami = d.anak ? 1/4 : 1/2;
				suami = sisa * suami;
				sisa -= suami
				data.push({name: 'Suami',bagian: suami === 1/4 ? '1/4' : '1/2', jumlah: suami});
		}
		else if ( d.istri ) {
				istri = d.anak ? 1/8 : 1/4;
				istri = sisa * istri;
				sisa -= istri;
				data.push({name: 'istri',bagian: istri === 1/8 ? '1/8' : '1/4', jumlah: istri});
		}
		if ( d.ibu ){
				ibu = d.anak ? 1/6 : 1/3;
				ibu = sisa * ibu;
				sisa -= ibu;
				data.push({name: 'ibu', bagian: ibu ===1/6 ? '1/6' : '1/3', jumlah: ibu});
		}
		if ( d.ayah ){
				ayah = d.anak ? 1/6 : 'sisa';			
				ayah = sisa * ayah;
				sisa -=ayah;
				data.push({name: 'bapak', bagian: ayah === 1/6 ? '1/6' : ayah, jumlah : ayah});
		}	
		if ( d.anak ) {
				if ( d.anakL > 0 ) { 
					anakL = d.anakP ? sisa * 2/3 : sisa;
					sisa -=anakL;
				data.push({name: 'Anak Laki-Laki', bagian: d.anakP ? '2:1A' : 'Sisa', jumlah: anakL});
				}
				if ( d.anakP > 0){
					anakP = d.anakL ? sisa : d.anakP >=2 ? sisa * 2/3 : sisa;
					data.push({name: 'Anak Perempuan', bagian: '1/3' , jumlah : anakP});
				}
		}	
		//if ( d.suami && d.anak && d.ayah && d.ibu) {
		//	suami = alrits * 1/4;
		//	alrits-=suami;
		//	data.push({name: 'Suami',bagian: '1/4', jumlah: suami});

		//	if( d.anakL > 0 ){
		//		bgbpk = '1/3';
		//		bapak = alrits * 1/3;
		//	}
		//	else {
		//		bapak = alrits * 1/6;
		//		bgbpk = '1/6';
		//	}
		//alrits-=bapak;
		//	data.push({name: 'bapak', bagian: bgbpk, jumlah : bapak});
		//	ibu = alrits * 1/6;
		//	alrits-=ibu;
		//	anak =alrits;
		//	data.push({name: 'ibu', bagian: '1/6', jumlah: ibu});
		//	data.push({name: 'anak', bagian: 'Sisa/Semuanya', jumlah: anak});
		//}

		//if ( d.istri && d.anak && d.ayah && d.ibu) {
		//	istri = alrits * 1/8;
		//	alrits-=istri;
		//	data.push({name: 'istri',bagian: '1/8', jumlah: istri});

		//	if( d.anakL > 0 ){
		//		bgbpk = '1/3';
		//		bapak = alrits * 1/3;
		//	}
		//	else {
		//		bapak = alrits * 1/6;
		//		bgbpk = '1/6';
		//	}
		//alrits-=bapak;
		//	data.push({name: 'bapak', bagian: bgbpk, jumlah : bapak});
		//	ibu = alrits * 1/6;
		//	alrits-=ibu;
		//	anak =alrits;
		//	data.push({name: 'ibu', bagian: '1/6', jumlah: ibu});
		//	data.push({name: 'anak', bagian: 'Sisa/Semuanya', jumlah: anak});
		//}
		return data;
	}
	render(){
		const classes = this.props.classes;
		const dr = this.props.fieldValues;
 		const stepper=			<MobileStepper
        type="progress"
        steps={3}
        position="static"
        activeStep={this.props.step}
        onBack={this.props.prevStep}
        onNext={this.props.nextStep}
        disableBack={this.props.step === 1}
        disableNext={this.props.step === 3}
		/>;
		const money = (x) => {
				return <NumberFormat value={x} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} />;
		};	
		return (
			<div>
			<Paper>
			<Typography type="headline" component="h3">
				Hasil Pembagian Warisan.
			</Typography>
			<Typography type="body1" component="p">
				Jumlah Harta: {money(dr.harta)} <br/>
				Harta Yang Dibagi: {money(dr.alrits)}<br/>
				Utang: {money(dr.utang)}<br/>
				Wasiat: {money(dr.wasiat)}<br/>
				Tajhis: {money(dr.tajhis)}<br/>
			</Typography>
			<Table>
			<TableHead>
				<TableRow>
				<TableCell>Ahli Waris</TableCell>
				<TableCell>Bagian</TableCell>
				<TableCell>Jumlah</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{ data.map(n=> {
					return (
						<TableRow>
								<TableCell>
									{n.name ? n.name : null}
								</TableCell>
								<TableCell>
									{n.bagian ? n.bagian : null}
								</TableCell>
								<TableCell>
									{money(parseInt(n.jumlah ?  n.jumlah : null))}
								</TableCell>
						</TableRow>
					);
				})
				}
			</TableBody>
			</Table>
			</Paper>
			{stepper}
			</div>
		);
	}
}
Finish.propTypes = {
	  classes: PropTypes.object.isRequired,
};
export default Finish;
