import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';
import Homes from './component/homes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div>
            <ul>
              <li><IndexLink to="/">返回首页</IndexLink></li>
              <li ><Link to="/girls">点击我到女神页面</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
