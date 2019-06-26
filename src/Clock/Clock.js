import React, { Component } from 'react';

import './Clock.css';


class  Clock extends Component {

	state = {
		time: new Date()
	};

	componentDidMount() { 
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000); 
    }

    componentWillUnmount() { 
        clearInterval(this.update);
    }

	render () {
		const {time} = this.state;
		let hours;
		if(time.getHours().toLocaleString() < 10) {
			hours =`0${time.getHours().toLocaleString()}`
		} else {
			hours =`${time.getHours().toLocaleString()}`
		}
		let minutes;
		if(time.getMinutes().toLocaleString() < 10) {
			minutes =`0${time.getMinutes().toLocaleString()}`
		} else {
			minutes =`${time.getMinutes().toLocaleString()}`
		}
		let period;
		if(time.getHours().toLocaleString() > 3 && time.getHours().toLocaleString() < 10) {
			period = "morning";
		} else if (time.getHours().toLocaleString() > 10 && time.getHours().toLocaleString() < 19){
			period = "day";
		} else if (time.getHours().toLocaleString() > 19 && time.getHours().toLocaleString() < 21){
			period = "evening";
		} else {
			period = "night";
		}
		return (
			<section className = "clock m-3 d-flex wrapper-central">
				<div className="clock-wrapper m-3">
					<span className="clock-numb">{hours}:{minutes}</span>
				</div>
				<span className="add-text"> Good { period }, Anton! </span>
			</section>
		);
	}
};

export default Clock;