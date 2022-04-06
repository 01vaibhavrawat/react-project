import React, {Component} from "react";
export default class CustomersList extends Component
{

state = {
pageTitle: "customers",
customersCount: 5,
customers: [
{id:1, 
name:"scott", 
phone:"123-456", 
address: {city: "tokio",
photo: "https://picsum.photos/id/1010/60"}},
{id:2, 
name:"jones", 
phone:"123-456", 
address: {city: "berlin",
photo: "https://picsum.photos/id/1011/60"}},
{id:3, 
name:"allen", 
phone:"123-456", 
address: {city: "london", 
photo: "https://picsum.photos/id/1012/60"}},
{id:4, 
name:"james", 
phone:null, 
address: {city: "delhi",
photo: "https://picsum.photos/id/1013/60"}},
]
};

	render() {
	return (
	<div>
	<h4 className="border-bottom m-1 p-1">{this.state.pageTitle}
	<span>{this.state.customersCount}</span>
	<button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
	</h4>

	<table className="table">
	<thead>
	<tr>
	<th>id</th>
	<th>photo</th>
	<th>name</th>
	<th>phone</th>
	<th>city</th>
	</tr>
	</thead>
	
	<tbody>{this.getCustomerRow()}</tbody>
	</table>
	</div>
	);
}

onRefreshClick = (phone) => {
	this.setState({
	customersCount:7,
	});
}

getPhoneToRender=(phone)=>
{
if(phone) return phone;
else{
return <div className="bg-warning p-2 text-center">"n/a"</div>;}
}

getCustomerRow=()=>{
	return (this.state.customers.map((cust, index) => {
	return(
	<tr key={cust.id}>
	<td>{cust.id}</td>
	<td><img src="{cust.address.photo}" alt="customer" />
	<div><button className="btn btn-sm btn-secondary" onClick={ () => {this.onChangePictureClick(cust, index);}} /></div></td>
	<td>{cust.name}</td>
	<td>{this.getPhoneToRender(cust.phone)}</td>
	<td>{cust.address.city}</td>
	</tr>
	);}
	));
}

onChangePictureClick = (cust, index) => {
//console.log(cust);
//console.log(index);

var custArr = this.state.customers;
custArr[index].photo = "https://picsum.photos/id/104/60";
this.setState({customers: custArr});
};
}