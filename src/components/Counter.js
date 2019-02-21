import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../actions';

class Counter extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.count}</h1>
				<p>
					<button onClick={this.props.increment}><code>+</code> </button>
					<button onClick={this.props.decrement}><code>&minus;</code></button>
					<button onClick={this.props.reset}><code>reset</code></button>
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
		decrement,
		reset
	}
}

export default connect(mapStateToProps, mapDispatchToProps())(Counter)
