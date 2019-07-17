import React, { Component } from 'react';
import {UndefPage} from '../Pages/';

const HocLoggedIn = (View) => {
	return class extends Component {

		state = {
			access: false,
			userLogin: '',
		}

		componentDidMount() {
			this.update()
		}
		
		update = () => {
			const res = this.props.getUserData();
			if (res) {
				this.setState({
					...res
				})
			}
			
		}

		componentDidUpdate(prevProps) {
	      if(this.props.getUserData !== prevProps.getUserData) {
	        this.updateData();
	      }
	    }




		render () {
			const {access, userLogin} = this.state;
			if(!access) {
				return <UndefPage />
			}

			return <View {...this.props}  userLogin={userLogin} />;
		};
	};
};

export default HocLoggedIn;