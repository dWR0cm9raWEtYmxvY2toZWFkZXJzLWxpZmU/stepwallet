//
/* jshint expr: true */

import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import todoApps from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';


document.addEventListener("touchmove",function(e){
    e.preventDefault();
    e.stopPropagation();
},false);

const store = createStore(todoApps)
const theme = createMuiTheme()

ReactDOM.render(
    <Provider store={store}>
	<MuiThemeProvider theme={theme}>
	    <App />
	</MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
