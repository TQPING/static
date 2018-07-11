import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/*import Homes from './component/homes';
import Logins from './component/logins';*/


ReactDOM.render(
	<App/>,
    document.getElementById('root'));
registerServiceWorker();
