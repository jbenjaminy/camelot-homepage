import React, { Component } from 'react';
// import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
// import * as actions from './actions';

class Nav extends Component {
	render() {
		return (
			<div className='main-wrapper'>
				<div className='nav'>
					<div className='logo'>
						<a href='http://www.camelothouston.com'>
							<img
								className='logo-icon'
								src='http://i.imgur.com/shu5wW2.png'
								alt='camelot-logo-icon'
							/>
							<img
								className='logo-text'
								src='http://i.imgur.com/AHk5uJ2.png'
								alt='camelot-logo-text'
							/>
						</a>
					</div>
					<div className='nav'>
						<div className='nav-container'>
							<ul>
								<li>About</li>
								<li>Properties</li>
								<li>Builder Services</li>
								<li>Investments</li>								<li>Press</li>
								<li>Agents</li>
								<li>Press</li>
								<li>Contact</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect((state) => ({
	prop: state.prop,
}))(Nav);
