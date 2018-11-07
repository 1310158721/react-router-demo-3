import React, { Component } from 'react'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import App from './App'
import Home from './components/home'
import About from './components/about'
import Join from './components/join'
import NotFound from './components/404'
import Login from './components/login'

export default class CRouter extends Component {
	render () {
		return (
			<Router history={hashHistory}>
				<Route path={'/'}>
					<IndexRedirect to='/app/dashboard/home' />
					<Route path={'app'} component={App}>
						<Route path={'dashboard'}>
							<Route path={'home'} component={Home}></Route>
							<Route path={'about'} component={About}></Route>
							<Route path={'join'} component={Join}></Route>
						</Route>
					</Route>
				</Route>
				<Route path={'/404'} component={NotFound}></Route>
				<Route path={'/login'} component={Login}></Route>
			</Router>
		)
	}
}