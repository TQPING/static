import React, {Component} from 'react';
import logo from '../logo.svg';
class Header extends Component {
	render() {
		return(
			<div>
			<h3>黑山姥姥</h3>
			<header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <h1 className="App-title">Welcome to WoWo</h1>
	        </header>
	        </div>
		);
	}
}
export default Header;