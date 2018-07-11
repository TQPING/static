import React, {Component} from 'react';
import logo from '../logo.svg';
class List extends Component {
	constructor() {
	    super();
	    this.state = {
	      value: "like",
	    };
	 }
	render() {
		return(
			<ul className="ul_box">
	        	<li className="li_box">
	        		<a className="clearfix a_box">
	        			<img className="Img-logo" src={logo} alt="logo" />
	        			<div>
	        				<b>{this.state.value}</b>
	        				<p className="p_ellipsis">能和心爱的人一起睡觉,是件幸福的事情;可是打呼噜怎么办???</p>
	        			</div>
	        		</a>
	        	</li>
	        	<li className="li_box">
	        		<a className="clearfix a_box">
	        			<img className="Img-logo" src={logo} alt="logo" />
	        			<div>
	        				<b>幸福</b>
	        				<p className="p_ellipsis">能和心爱的人一起睡觉,是件幸福的事情;可是打呼噜怎么办???</p>
	        			</div>
	        		</a>
	        	</li>
	        	<li className="li_box">
	        		<a className="clearfix a_box" href="">
	        			<img className="Img-logo" src={logo} alt="logo" />
	        			<div>
	        				<b>幸福</b>
	        				<p className="p_ellipsis">能和心爱的人一起睡觉,是件幸福的事情;可是打呼噜怎么办???</p>
	        			</div>
	        		</a>
	        	</li>
	        </ul>
		);
	}
}

export default List;