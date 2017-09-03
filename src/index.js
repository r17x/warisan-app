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
import Grid from 'material-ui/Grid';
import createMuiTheme from 'material-ui/styles/theme';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MuiThemeProvider } from 'material-ui/styles';
const theme = createMuiTheme();
ReactDOM.render(
	<MuiThemeProvider theme={theme}>
	<Grid container align="center"  justify="center">
	<Grid item xs={12} justify="center">
	<AppBar className="topbar" position="static">
	        <Toolbar>
	          <Typography type="title" color="inherit" align="center">
	            Applikasi Pembagian Warisan
	          </Typography>
	        </Toolbar>
	      </AppBar>
	<Grid item justify="center" align="center">
	<App />
	</Grid>
	</Grid>
	</Grid>
	</MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
