import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

export default connect((state) => ({
	state
}), actions)(class Form extends React.Component {
	update(e) {
		e.preventDefault();
		this.props.actionThree(this.refs.inputVal.value);
		this.props.fetchOne();
	}

	render() {
		return (
			<form onSubmit={this.update.bind(this)}>
				<input ref="inputVal" />
				<input type="submit" value="Replace Paula" />
			</form>
		);
	}
});
