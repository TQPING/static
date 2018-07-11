// modules/App.js
import React, { Component } from 'react';
import { Router, Route} from 'react-router';

import App from './App';
import Logins from './component/logins';

class Routers extends Component {
  render() {
    return (
      <Router>
				<Route path="/" component={App}/>
				<Route path="/logins" component={Logins}/>
			</Router>
    )
  }
}

export default Routers;