import React from	'react';
import {Route, IndexRoute} from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default(
	<div>
		<Route path="/" component={HomePage}/>
		<Route path="about" component={AboutPage}/>
	</div>

);
