import React, {Component} from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import CustomersList from "./CustomersList";
import{Route} from "react-router";
import {BrowserRouter, Routes} from "react-router-dom";
import NoMatch from "./NoMatch";

export default class App extends Component
{
render() {
	return(
	<BrowserRouter>
	<NavBar />
	<Routes>
	<Route path="/" exact component={<Login />} />
	<Route path="/dashboard" exact component={Dashboard} />
	<Route path="/ShoppingCart" exact element={<ShoppingCart />} />
	<Route path="/customers" exact component={CustomersList} />
	<Route path="/login" exact component={Login} />
	//<Route path="*" element={<NoMatch />} />
	</Routes>
	</BrowserRouter>
		);
}	
}