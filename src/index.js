import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import './css/bootstrap.min.css';
//import './css/navbar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import createMuiTheme from '@material-ui/core/styles/theme';
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { MuiThemeProvider } from '@material-ui/core/styles';
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
