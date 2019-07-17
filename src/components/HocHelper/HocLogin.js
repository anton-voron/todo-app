import React { Component } from 'react';

const HocLogin = (View) => {
	return class extends Component {

		state = {
			isLoggedIn: false,
			userName: null,
			password: null,
			email: null
		}

		

		render () {
			return (

			);
		}
	}
}