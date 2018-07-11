import React, {Component} from 'react';
class Footer extends Component {
	
	constructor() {
	    super();
	    this.handledata = this.handledata.bind(this);//改变this指针指向
	    this.state = {
	      title: "like",
	      datas:'',
	    };
	 }
	handledata(){
		//发送ajax请求数据，对数据进行更新
		var self = this;
		var xhr = new XMLHttpRequest();
		xhr.open("get","http://localhost:8080//remMM/php/datatT.php");
		xhr.onreadystatechange = ()=>{
			if(xhr.readyState===4 && xhr.status===200){				
				var data = JSON.parse(xhr.responseText)//将字符串转化为对象或数组

				self.setState({
					datas:data,
				});
				/*this.setState({
					title:data[0].name,
				});*/
				
				console.log(self.state.datas);
				/*console.log(this.state.title);*/
			}
		};
		xhr.send();
	}
	componentDidMount(){
        //this.handledata();
    }
	render() {
		return(
			<div>
			<h3 onClick={this.handledata}>黑山姥姥</h3>
			<header className="App-header">
	         <img src={require("../logo.svg")} className="App-logo" alt="logo" />
	          <h1 className="App-title">{this.state.title}</h1>
	        </header>
	        </div>
		);
	}
}

export default Footer;