import React,{ Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';	
import { withStyles, createStyleSheet } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import { FormLabel, FormControl, FormControlLabel } from '@material-ui/core/Form';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import BigInt from 'big-integer';
const styleSheet = createStyleSheet(theme => ({
	  container: {
			    display: 'flex',
			    flexWrap: 'wrap',
			  },
	  textField: {
			    marginLeft: theme.spacing.unit,
			    marginRight: theme.spacing.unit,
			    width: 700,
			  },
}));

class Harta extends Component{
	constructor(props){
		super(props);
		this.saveAndContinue = this.saveAndContinue.bind(this);
		this.handleRadio = this.handleRadio.bind(this);
		this.state = {
			muwarits:'',
			notif: false,
			message: null
		};
	}
	notifOpen = ()=>{
		this.setState({ notif:true });
		this.harta.focus();
	}
	notifClose = ()=>{
		this.setState({notif:false});
	}
	saveAndContinue(e){
		//e is event
		e.preventDefault();
		
		var harta = !isNaN(this.harta.value) ? this.harta.value:0;
		var utang = !isNaN(this.utang.value) ? this.utang.value:0;
		var wasiat = !isNaN(this.wasiat.value) ? this.wasiat.value:0;
		var	tajhis = !isNaN(this.tajhis.value) ? this.tajhis.value:0;
		//console.log(harta);
		//console.log(utang);
		//console.log(wasiat);
		//console.log(tajhis);
		var bayar = BigInt(utang).add(tajhis);
		bayar = BigInt(bayar).add(wasiat);
		console.log(bayar);
		
		if ( harta < bayar || harta <= 0 || harta-bayar===0){
				this.notifOpen();
				return;
		}
		var data = {
			harta : harta,
			utang : utang,
			muwarits : this.state.muwarits,
			tajhis : tajhis,
			wasiat : wasiat,
			alrits: harta-utang-wasiat-tajhis,
			ayah: false,
			ibu: false,
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
		const classes = this.props.classes;
 		const stepper=			<MobileStepper
        type="progress"
        steps={4}
        position="static"
        activeStep={this.props.step}
        onBack={this.props.prevStep}
        onNext={this.saveAndContinue}
        disableBack={this.props.step === 1}
        disableNext={this.props.step === 3}
      /> ;
		return (
			<div>
			<div className={classes.container}>
			
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
			<FormControl required>
			<FormLabel>Muwarits</FormLabel>
			<FormControlLabel
			className={classes.textField}
			control={
			<Radio
				checked={muwarits==='L'}
				onClick={this.handleRadio}
				inputRef={(input) => {this.muwarits = input;}}
				value="L"
				muwarits={muwarits}
				id="muwarits"
				label="Laki-Laki" aria-label="Laki-Laki" />}
			label="Laki-Laki"
			/>
			<FormControlLabel
			className={classes.textField}
			control={
			<Radio
				checked={muwarits==='P'}
				onClick={this.handleRadio}
				inputRef={(input) => {this.muwarits = input;}}
				value="P"
				muwarits={muwarits}
				id="muwarits"
				label="Perempuan" />}
			label="Perempuan"/>
		</FormControl>	
			</div>
			{stepper}				
			<Snackbar 
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
					}}
			open={this.state.notif}
			autoHideDuration={6e3}
			onRequestClose={this.notifClose}
			SnackbarConctentProps={{
				'aria-describedby' : 'message-id'
			}}
			message={<span id="message-id">Tidak Ada Harta  Yang Bisa Di bagi</span>}
			action={[
				<IconButton
					key="close"
					aria-label="Close"
					color="inherit"
					
					onClick={this.notifClose}
				>
				<CloseIcon/>
				</IconButton>
			]}
			/>

			</div>
		);
	}

}

export default withStyles(styleSheet)(Harta);
