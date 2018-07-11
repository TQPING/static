import React, { Component } from 'react';
import {Carousel} from 'antd';
import './bannerStyle.css';

class Banner extends Component {
	render() {
	    return (
			<Carousel autoplay>
			    <div><img className="banner-img" src={require("../pic/21.jpg")} alt="" /></div>
			    <div><img className="banner-img" src={require("../pic/22.jpg")} alt="" /></div>
			    <div><img className="banner-img" src={require("../pic/23.jpg")} alt="" /></div>
			    <div><img className="banner-img" src={require("../pic/24.jpg")} alt="" /></div>
			    <div><img className="banner-img" src={require("../pic/25.jpg")} alt="" /></div>
		 	</Carousel>
		)
   	}
}

export default Banner;
