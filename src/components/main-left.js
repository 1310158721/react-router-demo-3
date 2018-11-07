import React, { Component } from 'react'
import { Link } from 'react-router'
import '../common/main-left.css'

export default class MainLeft extends Component {
	render () {
		return (
			<ul>
				<li>
					<Link to="/app/dashboard/home">Home</Link>
				</li>
				<li>
					<Link to="/app/dashboard/about">About</Link>
				</li>
				<li>
					<Link to="/app/dashboard/join">Join</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/404">404</Link>
				</li>
			</ul>
		)
	}
}