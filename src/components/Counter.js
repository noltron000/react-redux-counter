import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/';

class Counter extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.count}</h1>
				<p>
					<button onClick={() => { }}> + </button>
					<button onClick={() => { }}> + </button>
				</p>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		count: state.count
	}
}

const mapDispatchToProps = () => {
	return {
		increment,
		decrement
	}
}

export default connect(mapStateToProps, mapDispatchToProps())(Counter)
