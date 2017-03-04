import React from 'react';
import { connect } from 'react-redux';

class Main extends React.Component {
	render() {
		return (
			<div>
				<h1>Camelot Realty Group</h1>
			</div>
		);
	}
}

export default connect((state) => ({
	prop: state.prop,
}))(Main);
