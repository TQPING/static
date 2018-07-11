import React, {Component} from 'react';
import './App.css';
import Header from './compont/Header';
import List from './compont/list';
import Footer from './compont/footer';

class App extends Component {
	render() {
		return(
			<div className="App">
				<Header />
				<List />
				<Footer />
      </div>
		);
	}
}

export default App;