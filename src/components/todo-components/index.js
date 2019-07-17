import React from 'react';

import Login from '../Login/Login.js';
import TaskApp from '../TaskApp/TaskApp';
import {withLoginAPI, HocLoggedIn} from '../HocHelper/';


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

const LoginPage = withLoginAPI(mapMethodsToLogin)(Login);
const TaskAppPage = withLoginAPI(mapMethodsToTaskApp)(HocLoggedIn(TaskApp))


export {LoginPage, TaskAppPage}