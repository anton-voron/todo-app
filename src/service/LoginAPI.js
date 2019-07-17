export default class LoginAPI {
	constructor () {
		this.state = {
			access: false,
			userLogin: null,
			userPassword: null,
			userEmail: null,
			userId: null,
		}
	}

	_userId = 0;

	_userData = [
		{
			userLogin: "userTest",
			userPassword: "emailtest@gmail.com",
			userEmail: "123123",
			userId: this._userId ++
		},
		{
			userLogin: "Antik",
			userPassword: "example@gmail.com",
			userEmail: "321321",
			userId: this._userId ++
		}
	];

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
	}

	registerUser = (newLogin, newEmail, newPassword) => {
		const userData = this._userData.find((user) => {
			if (user.userLogin === newLogin || user.userEmail === newEmail) {
				return user
			}	
		});

		if(userData === undefined) {
			const newUser = {
				userLogin: newLogin,
				userPassword: newPassword,
				userEmail: newEmail,
				userId: this._userId ++
			}
			console.log("You registered successfully", this._userData)
			this._userData.push(newUser);
			return true;
		} 
		 if(userData.userEmail === newEmail) {
			console.log("This email has already been registered")
			return false;
		} 
		 if(userData.userLogin === newLogin) {
			console.log("This login is taken by other user");
			return false;
		}
	};


	onLogin = (inputLogin, inputPassword) => {
		const userData = this._userData.find((user) => {
			if (user.userLogin === inputLogin && user.userPassword === inputPassword) {
				return user
			}
		})

		if (userData) {
			this.state = {
				access: true,
				...userData,
			}
			console.log(this.state)
		} else { 
			console.log("Invalid Data")
			return false 
		}	
	};


	isLoggedIn = () => {
		return this.state.access;
	};

	getUserData = () => {
		console.log(this.state.userLogin);
		return this.state;
	};

}
