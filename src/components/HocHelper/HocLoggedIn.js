import React, { Component } from 'react';
import UndefPage from '../UndefPage/UndefPage.js';

const HocLoggedIn = (View) => {
	return class extends Component {

		state = {
			isLoggedIn: false,
			userName: '',
		}

		componentDidMount() {
			this.update()
		}
		
		update = () => {
			const {userName, access} = this.props.getUserData();
			if (access) {
				this.setState({
					isLoggedIn: access,
					userName
				})
			}
			
		}

		componentDidUpdate(prevProps) {
	      if(this.props.getUserData !== prevProps.getUserData) {
	        this.updateData();
	      }
	    }




		render () {
			const {isLoggedIn, userName} = this.state;
			if(!isLoggedIn) {
				return <UndefPage />
			}

			return <View {...this.props} isLoggedIn = {isLoggedIn} getUserName={userName} />;
		};
	};
};

export default HocLoggedIn;