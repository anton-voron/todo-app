import React from 'react';
import { LoginConsumer } from '../Login-Service-Context/Login-Service-Context.js';

const withLoginAPI = (mapMethodsToProps) => (Wrapper) => {

	return (props) => {
		return (
			<LoginConsumer>
			{
				(loginAPI) => {
					const serviceProps = mapMethodsToProps(loginAPI);
					return (
						<Wrapper {...props} {...serviceProps}/>	
					);
				}
			}
			</LoginConsumer>
		)		
	};
};

export default withLoginAPI;