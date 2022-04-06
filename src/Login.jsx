import React, {Component} from "react";
export default class Login extends React.Component
{

constructor(props)
{
	super(props);
	this.state={};
	this.state= {email:"",password:"",message:""}
}
	render() {
	 return(
	 <div className="col-lg-9">
	 <h4 className="m-1 p-2 border-bottom">Login</h4>

	<div className="form-group form-row">
	<label className="col-lg-4">Email:</label>
	<input type="text" className="form-control" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value});}} />
	</div>

	<div className="form-group form-row">
	<label className="col-lg-4">Password:</label>
	<input type="text" className="form-control" value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value});}}/>
	</div>

	<div className="text-right">
	<span>{this.state.message}</span>

	<button className="btn btn-primary" onClick={this.onLoginClick}>Login
	</button>
	</div>
	 </div>
	 );
	}

	onLoginClick= async ()=>{
	console.log(this.state);
	var response = await fetch(`http://localhost:2000/users?email=${this.state.email}&password=${this.state.password}`, {method:"GET"});

	var body = await response.json();
	console.log(body);

	if(body.length > 0){
this.setState({message:"successful"}); 
	}
	else
	{
this.setState({message:"invalid"});
	}
	};
}