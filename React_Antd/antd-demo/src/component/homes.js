import React, { Component } from 'react';
import Banner from './banner/banner';
import Lists from './lists/lists';

class Homes extends Component {
  render() {
    return (
    	<div>
    		<Banner/>
	      	<Lists/>
	    </div>
    );
  }
}

export default Homes;