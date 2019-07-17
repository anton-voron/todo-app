import React, { Component } from 'react';
import {Link} from 'react-router-dom';

function NavAuth () {
	return(
		<nav className="container m-2">
			<div className="row justify-content-around">
				<Link to='/' className="submit-button gradient-border wrapper-central col-5">
					Login
				</Link>
					
				<Link to='/registration' className="submit-button gradient-border wrapper-central col-5">
					Registration
				</Link>
			</div>
		</nav>
	);
}

export default NavAuth;