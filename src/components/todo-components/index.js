import React from 'react';

import Login from '../Login/Login.js';
import TaskApp from '../TaskApp/TaskApp';
import withLoginAPI from '../HocHelper/withLoginAPI.js';


const mapMethodsToLogin = (loginAPI) => {
	return {
		onLogin: loginAPI.onLogin,
		isLoggedIn: loginAPI.isLoggedIn
	}
}

const mapMethodsToTaskApp = (loginAPI) => {
	return {
		isLoggedIn: loginAPI.isLoggedIn,
		getUserName: loginAPI.getUserName
	}
}

const LoginPage = withLoginAPI(mapMethodsToLogin)(Login);
const TaskAppPage = withLoginAPI(mapMethodsToTaskApp)(TaskApp)


export {LoginPage, TaskAppPage}