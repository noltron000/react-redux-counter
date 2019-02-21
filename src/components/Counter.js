import React, { Component } from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = () => {
	return {
		count: state.count
	}
}

export default connect(mapStateToProps)(Counter)
