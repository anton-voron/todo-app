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
			hours =`0${time.getHours().toLocaleString()} : ${time.getMinutes().toLocaleString()}`
		} else {
			hours =`${time.getHours().toLocaleString()} : ${time.getMinutes().toLocaleString()}`
		}
		return (
			<section className = "clock">
				<div className="clock-wrapper">
					<span className="clock-numb">{hours}</span>
				</div>
			</section>
		);
	}
};

export default Clock;