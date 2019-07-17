import Registration from '../Registration/Registration.js';
import Login from '../Login/Login.js';
import TaskApp from '../TaskApp/TaskApp';
import {withLoginAPI, HocLoggedIn} from '../HocHelper/';


const mapMethodsToRegistration = (loginAPI) => {
	return {
		registerUser: loginAPI.registerUser,
		loginValidator: loginAPI.loginValidator,
		passwordValidator: loginAPI.passwordValidator,
		emailValidator: loginAPI.emailValidator,
	}
}

const mapMethodsToLogin = (loginAPI) => {
	return {
		onLogin: loginAPI.onLogin,
		isLoggedIn: loginAPI.isLoggedIn,
		loginValidator: loginAPI.loginValidator,
		passwordValidator: loginAPI.passwordValidator,
		emailValidator: loginAPI.emailValidator,

	}
}

const mapMethodsToTaskApp = (loginAPI) => {
	return {
		getUserData: loginAPI.getUserData
	}
}


const RegPage = withLoginAPI(mapMethodsToRegistration)(Registration);
const LogPage = withLoginAPI(mapMethodsToLogin)(Login);
const TaskAppPage = withLoginAPI(mapMethodsToTaskApp)(HocLoggedIn(TaskApp))


export {RegPage, LogPage, TaskAppPage}