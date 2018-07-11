import React, { Component } from 'react';
import {Link} from 'react-router-dom';

/*import Header from './component/header/header';
import Logins from './component/logins';
import Banner from './component/banner/banner';
import Lists from './component/lists/lists';*/
import Homes from './component/homes';

class App extends Component {
	componentWillMount(){console.log(Link)};
  render() {
    return (
    	<div>
    		<p><Link to="/logins">登陆</Link></p>
    		<Homes/>
      </div>
    );
  }
}

export default App;
