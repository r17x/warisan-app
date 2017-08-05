import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import './css/bootstrap.min.css';
//import './css/navbar.css';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Grid from 'material-ui/Grid';

//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MuiThemeProvider } from 'material-ui/styles';

ReactDOM.render(
	<MuiThemeProvider>
	<Grid container gutter={16} align="center"  justify="center">
	<Grid item sm={6} >
	<AppBar position="static">
	        <Toolbar>
	          <Typography type="title" color="inherit" align="center">
	            Applikasi Pembagian Warisan
	          </Typography>
	        </Toolbar>
	      </AppBar>
	<App />
	</Grid>
	</Grid>
	</MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
