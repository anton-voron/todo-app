export default class LoginAPI {
	constructor () {
		this.state = {
			userName: null,
			userPassword: null,
			access: false
		}
	}
	_userData = [
		{
			login: "userTest",
			email: "emailtest@gmail.com",
			password: "123123"
		},
		{
			login: "Antik",
			email: "example@gmail.com",
			password: "321321"
		}
	];

	_userId = 0;
	loginValidator = (input) => {
		const loginRegex = /[A-Za-z]{5,}/;
		if(loginRegex.test(input)) {
			console.log('Sutiable');
			return true
		} else {
			console.log('To short, numbers and special characters are not allowed');
			return 'To short, numbers and special characters are not allowed'
		}
	};

	passwordValidator = (input) => {
		const passwordRegex = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
		if(passwordRegex.test(input)) {
			console.log('Sutiable');
			return true
		} else {
			console.log('At least 6 characters: one number, one special character, Latin lowercase and uppercase letter.');
			return 'At least 6 characters: one number, one special character, Latin lowercase and uppercase letter.'
		}
	};

	emailValidator = (input) => {
		const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if(emailRegex.test(input)) {
			console.log('Sutiable');
			return true
		} else {
			console.log('Invalid email');
			return 'Invalid email'
		}
	};
	createUser = (newLogin, newEmail, newPassword) => {
		const userData = this._userData.find((user) => {
			if (user.login === newLogin || user.email === newEmail) {
				return user
			}	
		});

		if(userData === undefined) {
			const newUser = {
				login: newLogin,
				email: newEmail,
				password: newPassword,
				userId: this._userId ++
			}
			console.log("You registered successfully")
			this._userData.push(newUser);
			return true;
		} 
		 if(userData.email === newEmail) {
			console.log("This email has already been registered")
			return false;
		} 
		 if(userData.login === newLogin) {
			console.log("This login is taken by other user");
			return false;
		}
	};


	onLogin = (inputLogin, inputPassword) => {
		const userData = this._userData.find((user) => {
			if (user.login === inputLogin && user.password === inputPassword) {
				return user
			}
		})

		if (userData) {
			console.log('ok')
			this.state = {
				userName: inputLogin,
				userPassword: inputPassword,
				access: true
			}
		} else { 
			console.log("Invalid Data")
			return false }	
	};


	isLoggedIn = () => {
		return this.state.access;
	};
	getUserName = () => {
		console.log(this.state.userName);
		return this.state.userName;
	};
}
