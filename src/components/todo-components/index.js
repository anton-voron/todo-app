import React from 'react';

import Registration from '../Registration/Registration.js';
import Login from '../Login/Login.js';
import TaskApp from '../TaskApp/TaskApp';
import {withLoginAPI, HocLoggedIn} from '../HocHelper/';


const mapMethodsToRegistration = (loginAPI) => {
	return {
		registerUser: loginAPI.registerUser
	}
}

const mapMethodsToLogin = (loginAPI) => {
	return {
		onLogin: loginAPI.onLogin,
		isLoggedIn: loginAPI.isLoggedIn
	}
}

const mapMethodsToTaskApp = (loginAPI) => {
	return {
		getUserData: loginAPI.getUserData
	}
}


const Registrationpage = withLoginAPI(mapMethodsToRegistration)(Registration);
const LoginPage = withLoginAPI(mapMethodsToLogin)(Login);
const TaskAppPage = withLoginAPI(mapMethodsToTaskApp)(HocLoggedIn(TaskApp))


export {Registrationpage, LoginPage, TaskAppPage}